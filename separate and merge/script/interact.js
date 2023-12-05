/*+++++++++++++++++++Basic functions+++++++++++++++++++*/

function hideprepera(){
    let prepareObj = document.getElementById("prepare");
    prepareObj.style.display='none';
};

function showprepare(){
    let prepareObj = document.getElementById("prepare");
    prepareObj.style.display='block';
};

function hideresult(){
    let resultObj = document.getElementById("result");
    resultObj.style.display='none';
};

function showresult(){
    let resultObj = document.getElementById("result");
    resultObj.style.display='flex';
};

function getinputdata(){
    let textinput = document.getElementById("text_box").value;
    if(textinput.length==0){
        alert("No data avilable.");
    }
    else{
        return textinput;
    }
};

function readFileInhalt(){
    let fileInput = document.getElementById("dataFile");
    let file = fileInput.files[0];
    if (file && file.name.endsWith('.csv')){
        var reader = new FileReader();

        reader.onload = function (e) {
            // Display or process the contents of the CSV file here
            var csvContent = e.target.result;
            let textBox = document.getElementById('text_box');
            textBox.value=csvContent;
            //alert('Data uploaded successfully!\n\nCSV Content:\n' + csvContent);
        };

        reader.readAsText(file);
    } else {
        alert('Please select a valid CSV file.');
    }
}

<<<<<<< Updated upstream
=======
function showFileInhalt(){
    let fileInput = document.getElementById("dataFile");
    let file = fileInput.files[0];

    if (file && file.name.endsWith('.csv')) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Display or process the contents of the CSV file here
            var csvContent = e.target.result;
            alert('Data uploaded successfully!\n\nCSV Content:\n' + csvContent);
        };

        reader.readAsText(file);
    } else {
        alert('Please select a valid CSV file.');
    }
    
};


>>>>>>> Stashed changes
function getfunctionflag(){
    let funcSelector= document.getElementById("D_function");
    let funcIndex=funcSelector.selectedIndex;
    let funcFlag=funcSelector.options[funcIndex].value;
    return funcFlag;
};


/*+++++++++++++++++++ functions from other grupps +++++++++++++++++++*/ 
function initializeMap() {
    var script = document.createElement('script');
    script.src = 'script/map_stuff.js';
    document.head.appendChild(script);
}


/*+++++++++++++++++++++++ function for buttons ++++++++++++++++++++ */


function dealwithrun(){
    let punktdata = "";
    punktdata = getinputdata();
    let functionFlag = getfunctionflag();
    if(punktdata != ""){
        alert("Start Map initialising");
        hideprepera();
        showresult();
        initializeMap();
    } 
    else{
        alert("No data avilable.");
        
    }
    
    /*Send Data and functionflag to IV-Grupp*/
    /*Should get sth back and send to Map-Gruppp, denn initialis the Map*/

    /*Hied the test-area and buttons*/
    /*Show Cluster list and map */
    
};

function deletedatenandfunc(){
    let weep = confirm("Are you sure to weep all the data and choosen function?");
    if(weep){
        document.getElementById("text_box").value="";
    }
};

function back2input(){
    hideresult();
    showprepare();
}