var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + 
d.getFullYear() + "." + (d.getMonth()+ 1) + "." + d.getDate() + ".0";

var vid = document.getElementById("https://www.youtube.com/watch?v=Qc-aNL6egpY&feature=share&fbclid=IwAR1CbfWy_ROlA7J5zvPSmqKItj3x2x5y0P5sBN3yBWD8YW4ctVGeSB8eMjk");

//...................................................
function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
} 
//...................................................
