<html>
<script>
function startTouch(ev) {
 // Process the event
}
function init() {
 var el=document.getElementById("target1");
 el.ontouchstart = startTouch;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" ontouchstart="startTouch(event)"> Touch me ... </div>
</body>
</html>