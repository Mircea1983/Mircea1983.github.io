var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + 
d.getFullYear() + "." + (d.getMonth()+ 1) + "." + d.getDate() + ".0";

var vid = document.getElementById("https://www.youtube.com/watch?v=Qc-aNL6egpY&feature=share&fbclid=IwAR33rZZ44qvpH6Dian0CaDR_fPzbMrnQiIM_sJg0par6P9yUDNyHvAcbZoY");

//...................................................
function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
} 
//...................................................
