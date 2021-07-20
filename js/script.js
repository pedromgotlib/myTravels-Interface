var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if(counter > 5){
        counter = 1;
    }
}, 5000);

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
  
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}