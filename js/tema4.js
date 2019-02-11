var d = new Date ();
document.getElementById("id_business_version").innerHTML = "Business version = " + 
d.getFullYear() + "." + (d.getMonth()+ 1) + "." + d.getDate() + ".0";

var vid = document.getElementById("https://youtu.be/Qc-aNL6egpY");

//...................................................
function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
} 
//...................................................

// global variable for the player
	var player;

	// this function gets called when API is ready to use
	function onYouTubePlayerAPIReady() {
	  // create the global player from the specific iframe (#video)
	  player = new YT.Player('video', {
	    events: {
	      // call this function when player is ready to use
	      'onReady': onPlayerReady
	    }
	  });
	}

	function onPlayerReady(event) {
	  
	  // bind events
	  var playButton = document.getElementById("play-button");
	  playButton.addEventListener("click", function() {
	    player.playVideo();
	  });
	  
	  var pauseButton = document.getElementById("pause-button");
	  pauseButton.addEventListener("click", function() {
	    player.pauseVideo();
	  });

	  var stopButton = document.getElementById("stop-button");
	  stopButton.addEventListener("click", function() {
	    player.stopVideo();
	  });
	  
	}

	// Inject YouTube API script
	var tag = document.createElement('script');
	tag.src = "https://youtu.be/Qc-aNL6egpY";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
