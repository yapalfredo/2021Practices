var image = undefined;
var canvas = undefined;
function upload() {
    var textInput = document.getElementById("fileInput");
    image = new SimpleImage(textInput);
    canvas = document.getElementById("canv1");
    image.drawTo(canvas);
}

function makeGray() {
    for (var pix of image.values()) {
        var avg = (pix.getRed() + pix.getGreen() + pix.getBlue()) / 3;
        pix.setRed(avg);
        pix.setGreen(avg);
        pix.setBlue(avg);
    }
    canvas = document.getElementById("canv2");
    image.drawTo(canvas);
}