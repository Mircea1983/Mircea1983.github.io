var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + 
d.getFullYear() + "." + (d.getMonth()+ 1) + "." + d.getDate() + ".0";

var vid = document.getElementById("https://www.youtube.com/watch?v=Qc-aNL6egpY&feature=share&fbclid=IwAR2EX-gpr5lTp6lCE7ZZhSUuTMLotc-b_vNCUdJDSc42t3SovxWBOq6sgkQ");

//...................................................
function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
} 
//...................................................
