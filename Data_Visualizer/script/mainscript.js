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