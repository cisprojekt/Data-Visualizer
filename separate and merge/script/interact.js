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

function showFileInhalt(){
    let fileObj = document.getElementById("filedata");
    
    let userFile = fileObj.files[0];
    let fileName = userFile.name;
    alert(fileName);
    let textBox = document.getElementById("text_box");
    textBox.value = dataInhalt;
    //let reader = new FileReader();
    //reader.onload = writeInhalt;
    //reader.readAsText(dataInhalt, "utf-8")
    if(fileObj.files[0] == undefined){
        alert("No files loaded!")
    }else{
        
    }
    
};

function writeInhalt(e){
    let inhalt = e.target.result;
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
function uploudandshowinhalt(){
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