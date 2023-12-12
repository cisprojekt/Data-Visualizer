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
    if(textinput==""){
        return false;
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

function getfunctionflag(){
    let funcSelector= document.getElementById("D_function");
    let funcIndex=funcSelector.selectedIndex;
    let funcFlag=funcSelector.options[funcIndex].value;
    return funcFlag;
};

/** This will check the first line and delete the axises */
function isCoordindat(txt_inhalt){
    let coorindat = [];
    if(txt_inhalt != ""){
        let lines = txt_inhalt.split('\n');
        console.log(lines.length);
        for(let i = 0; i < lines.length; i++){
            let line = lines[i];
            line =  line.split(',');
            if(line.length ==2 && parseFloat(line[0]) && parseFloat(line[1])){
                console.log("coord found");
                coorindat.push(line.toString());
            }
        }
    }
    if(coorindat.length > 0){
        console.log("get");
        return coorindat.toString;
    }
    return "";
} 

function isSequence(txt_inhalt, matchflag){

}

function isInChI(txt_inhalt, matchflag){
    
}

/* Fullscreen in-Place */

function MapViewSwitcher(){
    let clusterBox = document.getElementById("InforArea");
    let mapWindows = document.getElementById("chartContainer");
    let switchbutton = document.getElementById("switchbtn");
    if(switchbutton.innerHTML == "Full Screen"){
        mapWindows.style.transform = "scale(1)";
        mapWindows.style.left = "0px";
        mapWindows.style.top = "10px";
        clusterBox.style.display = "none";
        switchbutton.innerHTML = "Exit Full Screen";
        return 0;
    }else{
        mapWindows.style.transform = "scale(0.6)";
        mapWindows.style.left = "-260px";
        mapWindows.style.top = "-120px";
        clusterBox.style.display = "";
        switchbutton.innerHTML = "Full Screen";
        return 0;
    }
}



/*+++++++++++++++++++ functions from other grupps +++++++++++++++++++*/ 
function initializeMap() {
    var script = document.createElement('script');
    script.src = 'script/map_stuff.js';
    document.head.appendChild(script);
}


/*+++++++++++++++++++++++ function for buttons ++++++++++++++++++++ */


function dealwithrun(){
    let punktdata = "";
    let matchflag = new Boolean();
    let functionFlag = getfunctionflag();

    punktdata = getinputdata();

    switch(functionFlag){
        case 'noChoice':
            alert("Please choose a distance function");
            break;
        case 'Euclidean':
            console.log("function as Euc");
            punktdata = isCoordindat(punktdata);
            if(Boolean(punktdata)){
                console.log("match the euc")
            }
            else{
                console.log("empty data or data dosen't match");
            }
            break;
        case 'Tanimoto':
            console.log("function as Tani");
            break;
        case 'Hamming':
            break;
        default:
            console.log("Input datan dosen't match the distance function");
    }

    if(matchflag){
        hideprepera();
        showresult();
        initializeMap();
    } 
    else{
        alert("Input data dosen't match the distance function");
        return false;
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