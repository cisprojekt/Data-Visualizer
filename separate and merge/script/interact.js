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
    if(textinput.lengtg==0){
        alert("No data avilable.");
    }
    else{
        return textinput
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
    /*
    let fileName = userFile.name;
    alert(fileName);
    let textBox = document.getElementById("text_box");
    textBox.value = dataInhalt;
    let reader = new FileReader();
    reader.onload = writeInhalt;
    reader.readAsText(dataInhalt, "utf-8")
    if(fileObj.files[0] == undefined){
        alert("No files loaded!")
    }else{
        
    }
   
    document.getElementById('dataFile').addEventListener('change', function () {
        var fileInput = document.getElementById('');
        var file = fileInput.files[0];

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
    });
 */
};

function writeInhalt(){
    let inhalt = "test intalt";
    let textBox = document.getElementById("text_box");
    textBox.value = inhalt;
}

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
function ReadAndWriteInhalt(){
    let fileInput = document.getElementById("fileUpload");
    fileInput.click();
    alert(fileInput.files[0].name)
}


function dealwithrun(){
    getinputdata();
    getfunctionflag()
    /*Send Data and functionflag to IV-Grupp*/
    /*Should get sth back and send to Map-Gruppp, denn initialis the Map*/

    /*Hied the test-area and buttons*/
    /*Show Cluster list and map */
    hideprepera();
    showresult();
    initializeMap();
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