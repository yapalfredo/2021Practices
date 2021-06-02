function doColor(){
    var canvas = document.getElementById("canv1");
    var clrinput = document.getElementById("clr");
    
    var color = clrinput.value;
    canvas.style.backgroundColor = color;
}

function changeBackg(){
    var canvas = document.getElementById("canv1");
    canvas.style.backgroundColor = "Blue";
}