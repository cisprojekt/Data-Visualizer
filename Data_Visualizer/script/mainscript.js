function uploadfile(){
    let fileObj=document.getElementById('#uploadfile');
    let filetypes=[".csv",".txt",".doc",".doxc"]
    let islegal = false
    let objType = fileObj.name.substring(fileObj.name.lastIndexOf('.') + 1);
    if (objType && filetypes.length > 0){
        for(let i=0;i<filetypes.length;i++){
            if(filetypes[i]==objType){
                islegal=true;
                break;
            }
        }
    }
    if(!islegal){
        window.alert("Cannot accept this data type, please upload "+filetypes);
        return false;
    }else{
        let url=fileObj.name;
        let form=new FormData();
        form.append('uploadedfile', fileObj);
        xhr=new XMLHttpRequest();
        xhr.open("post",url,true);
        xhr.onload=uploadComplete; //request complet
        xhr.onerror=uploadFailed; //request failed
        xhr.send(form);
    }
}
function uploadComplete(evt) {
    //服务断接收完文件返回的结果
    //    alert(evt.target.responseText);
        console.log("上传成功！");
   }
   //上传失败
   function uploadFailed(evt) {
       console.log(evt);
   }


   /*
   choose a txt Daten and read the contnent
   */

const input = document.getElementById("#inpufile");

input.addEventListener("change", function() {
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const contents = reader.result;
    console.log("Uploaded contnent:" + contents);
  }

  reader.readAsText(file);
});



let runbtn=document.querySelector("#runbtn");
runbtn.addEventListener('click', function(event){
    window.alert("Star to calculate the distance...")
})
let cleanupbtn=document.querySelector("#cleanupbtn");
cleanupbtn.addEventListener('click', function(ecent){
    window.confirm("Delet all the data?");
    if(confirm("Delet all")){
        document.write("Will delete all the data")
    }else{
        document.write("Back to the page")
    }
})


let btn=document.querySelector("#textsubmit"),
    textArea=document.querySelector("textarea"),
    msg=document.querySelector(".msg");
btn.onclick=function(){
    if(textArea.value){
        msg.innerHTML+="<li class='msglist'>"+textArea.value+"</li>";//add the text to the webseit
        textArea.value="";//clean up the text-area
    }else{
        alert("Please enter your text here")
    }
}