document.getElementById("id_business_version").innerHTML = "Business version = 2017.12.04.4"

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

canvas.addEventListener("touchstart", on_start_touch);
var lista_culori=["#FF0000","#00FF00", "#0000FF"];
//-----------------------------------

function_on_start_touch(e)
{
 var touches = e.changedTouches;
 for (var i=0; i < touches.lenght; i++){
	 contex.beginPath();
	 context.arc(touches.item(i).pageX; touches.item(i).pageY,20,0,2*Math.PI);
	 context.strokeStyle=lista_culori[i];
	 context.fillStyle=lista_culori[i];
	 context.fill();
	 context.stoke();

	 }
}
//-------------------------------

function on_move_touch (e)
{
	var touches = e.touches;
	for (var i=0; i<touches.lenght; i++){
		 contex.beginPath();
	 context.arc(touches.item(i).pageX; touches.item(i).pageY,20,0,2*Math.PI);
	 context.strokeStyle=lista_culori[i];
	 context.fillStyle=lista_culori[i];
	 context.fill();
	 context.stoke();

	 }
}

		