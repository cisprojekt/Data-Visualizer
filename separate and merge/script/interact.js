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
function InhaltVorarbeiten(txt_inhalt){
    if(txt_inhalt != ""){
        let first_enter = txt_inhalt.indexOf("\n");
        let first_line = txt_inhalt.substring(0, first_enter);
        let coorindat = /^-?([1-9]d.d|0.d[1-9]d|0?.0+|0),-?([1-9]d.d|0.d[1-9]d|0?.0+|0)$/;
        if(!first_line.match(coorindat)){
            console.log("axis include");
            txt_inhalt = txt_inhalt.substring(first_enter);
            console.log("axis removed:\n", txt_inhalt);
        }
        else{
            console.log("No axis-Line");
        }
        return txt_inhalt;
    }   
}

/* Fullscreen in-Place */

function MapViewSwitcher(){
    let clusterBox = document.getElementById("InforArea");
    let mapWindows = document.getElementById("map_iframe");
    let switchbutton = document.getElementById("switchbtn");
    if(switchbutton.innerHTML == "Full Screen"){
        mapWindows.style.transform = "scale(0.99)";
        mapWindows.style.left = "0px";
        mapWindows.style.top = "0px";
        clusterBox.style.display = "none";
        switchbutton.innerHTML = 'Exit Full Screen';
        return 0;
    }else{
        mapWindows.style.transform = "scale(0.6)";
        mapWindows.style.left = "-300px";
        mapWindows.style.top = "-145px";
        clusterBox.style.display = "";
        switchbutton.innerHTML = 'Full Screen';
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
    punktdata = getinputdata();
    let functionFlag = getfunctionflag();
    if(punktdata != ""){
        InhaltVorarbeiten(punktdata);
        hideprepera();
        showresult();
        initializeMap();
    } 
    else{
        alert("No data avilable.");
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