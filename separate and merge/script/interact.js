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
        alert("Please enter your data in the input box");
    }
    else{
        return textinput;
    }
};

function getFileinhalt(){
    let fileObj = document.getElementById("filedata");
    if(fileObj.value==''){
        alert("No file detected!")
    }
    else{
        let dataInhalt = fileObj.files[0];
        return dataInhalt;
    }
};

function getfunctionflag(){

};


/*+++++++++++++++++++ functions from other grupps +++++++++++++++++++*/ 
function initializeMap() {
    var script = document.createElement('script');
    script.src = 'script/map_stuff.js';
    document.head.appendChild(script);
}


/*+++++++++++++++++++++++ function for buttons ++++++++++++++++++++ */

function dealwithrun(){
    
    

    /*Send Data and functionflag to IV-Grupp*/
    /*Should get sth back and send to Map-Gruppp, denn initialis the Map*/

    /*Hied the test-area and buttons*/
    /*Show Cluster list and map */
    hideprepera();
    showresult();
    initializeMap();
};

function deletedatenandfunc(){
    confirm("Are you sure to weep all the data and choosen function?");
};

function back2input(){
    hideresult();
    showprepare();
}