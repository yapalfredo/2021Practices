function changeColor(){
	var divElement1 = document.getElementById("div1");
	var divElement2 = document.getElementById("div2");
	
	divElement1.className = "blueback";
	divElement2.className = "orangeback";
}

function doRed(){
	var canvasLeft = document.getElementById("canv1");
	canvasLeft.style.backgroundColor = "red";
}

function doBlue(){
	var canvasRight = document.getElementById("canv2");
	canvasRight.style.backgroundColor = "blue"
}