var textInput1;
var textInput2;
var fgImg = null;
var bgImg = null;
var canvas1;
var canvas2;


function loadForegroundImage() {
    textInput1 = document.getElementById("fgFileInput");
    fgImg = new SimpleImage(textInput1);
    canvas1 = document.getElementById("canv1");
    fgImg.drawTo(canvas1);
}

function loadBackgroundImage() {
    textInput2 = document.getElementById("bgFileInput");
    bgImg = new SimpleImage(textInput2);
    canvas2 = document.getElementById("canv2");
    bgImg.drawTo(canvas2);
}

function doGreenScreen() {
    if (fgImg == null || !fgImg.complete()) {
        alert("Foreground not loaded!");
        return;
    }

    if (bgImg == null || !bgImg.complete()) {
        alert("Background not loaded!");
    }

    clearCanvas();

    var output = new SimpleImage(fgImg.getWidth(), fgImg.getHeight());
    for (var pixel of fgImg.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > 220) {
            var bgPixel = bgImg.getPixel(x, y);
            output.setPixel(x, y, bgPixel);
        } else {
            output.setPixel(x, y, pixel);
        }
    }
    output.drawTo(canvas1);

}

function clearCanvas() {
    var context1 = canvas1.getContext("2d");
    var context2 = canvas2.getContext("2d");

    context1.clearRect(0, 0, canvas1.width, canvas1.height);
    context2.clearRect(0, 0, canvas2.width, canvas2.height);

    textInput1.value = null;
    textInput2.value = null;
}