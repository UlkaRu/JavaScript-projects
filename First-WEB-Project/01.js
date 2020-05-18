
/// var body = document.querySelector("body");
/// var isBlue = false;

/// setInterval(function(){
///	if (isBlue) {
///		body.style.background = "white";
///	} 	else {
///		body.style.background = "#3498db";
///	}
///	isBlue = !isBlue;
///}, 1000); -->

menu.onclick = function myFunction() {
	var x = document.getElementById("myTopnav");

	if(x.className === "topnav") {
		x.className += " responsive";
	} else{
		x.className = "topnav";
	}
}