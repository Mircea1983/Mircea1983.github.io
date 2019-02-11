var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + 
d.getFullYear() + "." + (d.getMonth()+ 1) + "." + d.getDate() + ".0";

var vid = document.getElementById("https://www.youtube.com%2Fwatch%3Fv%3DQc-aNL6egpY%26feature%3Dshare%26fbclid%3DIwAR0DVrC0UajS6Cwp6t5QQKOfUFT6sK1L6kzyc3ybwHMcY3G4cioOnuTo56Y&h=AT10x0Nl6KDZ-qagK8PDBTurzcNChRMij15esQ9IMQqrwd4z_H2vtwoLG3NfDT5y_xPNg9UHYpP7Pv1Z-ou_U1Hk3TalsViYV60qzDroaO5BCPnbPP-vgfOEKh0W3EweNCTp");

//...................................................
function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
} 
//...................................................
