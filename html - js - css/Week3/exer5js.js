function doColor() {
    var canvas = document.getElementById("canv1");
    var clrinput = document.getElementById("clr");

    var color = clrinput.value;
    canvas.style.backgroundColor = color;
}

function doSquare() {
    var canvas = document.getElementById("canv1");
    var slider = document.getElementById("sldr");
    var context = canvas.getContext("2d");
    var value = slider.value;
    context.fillStyle = "yellow";
    //Clears the canvas before it draws new object
    context.clearRect(0,0,canvas.width, canvas.height);
    //Draws new object to the canvas
    context.fillRect(10,10,value,value);
}