function changeColor() {
    var divElement1 = document.getElementById("div1");
    var divElement2 = document.getElementById("div2");

    divElement1.className = "blueback";
    divElement2.className = "orangeback";
}

function doRed() {
    var canvasRight = document.getElementById("canv2");
   
    var context = canvasRight.getContext("2d");
    context.clearRect(0,0,canvasRight.width, canvasRight.height);
    canvasRight.style.backgroundColor = "red";
    


}

function doBlue() {
    var canvasRight = document.getElementById("canv2");
    canvasRight.style.backgroundColor = "blue";

    var context = canvasRight.getContext("2d");

    context.fillStyle = "yellow";
    context.fillRect(10, 10, 60, 60);
    context.fillRect(80, 10, 60, 60);

    context.fillStyle = "black";
    context.font = "20px Arial";
    context.fillText("Hello", 15, 45);

}