/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var image = null;
var output = null;
var canvas;

function upload() {
    textInput = document.getElementById("fileInput");
    image = new SimpleImage(textInput); //to hold original
    output = new SimpleImage(textInput);
    canvas = document.getElementById("can");
    output.drawTo(canvas);
    document.getElementById("imageDimension").value = "";
}

function makeRed() {
    if (checkIfNull(output) != false) {
        for (var pixel of output.values()) {
            pixel.setRed(255);
        }
        output.drawTo(canvas);
        document.getElementById("imageDimension").value = output.getWidth() + "x" + output.getHeight();
    }
}

function makeGray() {
    if (checkIfNull(output) != false) {
        for (var pixel of output.values()) {
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }
        canvas = document.getElementById("can");
        output.drawTo(canvas);
    }
}

function checkIfNull(i) {
    if (i == null || !i.complete()) {
        alert("Image not loaded!");
        return false;
    }
}

function clearFilter() {
    image.drawTo(canvas);
    output = null;
}

function roygbiv() {
    if (checkIfNull(output) != false) {
        var height = output.getHeight();
        for (var pixel of output.values()) {
            var y = pixel.getY();
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
            if (y < height / 7) {
                //red
                if (avg < 128) {
                    pixel.setRed(2 * avg);
                    pixel.setGreen(0);
                    pixel.setBlue(0);
                } else {
                    pixel.setRed(255);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(2 * avg - 255);
                }
            } else if (y < height * 2 / 7) {
                //orange
                if (avg < 128) {
                    pixel.setRed(2 * avg);
                    pixel.setGreen(0.8 * avg);
                    pixel.setBlue(0);
                } else {
                    pixel.setRed(255);
                    pixel.setGreen(1.2 * avg - 51);
                    pixel.setBlue(2 * avg - 255);
                }
            } else if (y < height * 3 / 7) {
                //yellow
                if (avg < 128) {
                    pixel.setRed(2 * avg);
                    pixel.setGreen(2 * avg);
                    pixel.setBlue(0);
                } else {
                    pixel.setRed(255);
                    pixel.setGreen(255);
                    pixel.setBlue(2 * avg - 255);
                }
            } else if (y < height * 4 / 7) {
                //green
                if (avg < 128) {
                    pixel.setRed(0);
                    pixel.setGreen(2 * avg);
                    pixel.setBlue(0);
                } else {
                    pixel.setRed(2 * avg - 255);
                    pixel.setGreen(255);
                    pixel.setBlue(2 * avg - 255);
                }
            } else if (y < height * 5 / 7) {
                //blue
                if (avg < 128) {
                    pixel.setRed(0);
                    pixel.setGreen(0);
                    pixel.setBlue(2 * avg);
                } else {
                    pixel.setRed(2 * avg - 255);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(255);
                }
            } else if (y < height * 6 / 7) {
                //indigo
                if (avg < 128) {
                    pixel.setRed(.8 * avg);
                    pixel.setGreen(0);
                    pixel.setBlue(2 * avg);
                } else {
                    pixel.setRed(1.2 * avg - 51);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(255);
                }
            } else {
                //violet
                if (avg < 128) {
                    pixel.setRed(1.6 * avg);
                    pixel.setGreen(0);
                    pixel.setBlue(1.6 * avg);
                } else {
                    pixel.setRed(0.4 * avg + 153);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(0.4 * avg + 153);
                }
            }
        }
        output.drawTo(canvas);
    }
}

function blurImage() {
    if (checkIfNull(image) != false) {
        for (var pixel of output.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
            if (Math.random() > 0.5) {
                var other = getPixelNearby(image, x, y, 10);
                output.setPixel(x, y, other);
            } else {
                output.setPixel(x, y, pixel);
            }
        }
        output.drawTo(canvas);
    }
}

// blur by moving random pixels
function ensureInImage(coordinate, size) {
    // coordinate cannot be negative
    if (coordinate < 0) {
        return 0;
    }
    // coordinate must be in range [0 .. size-1]
    if (coordinate >= size) {
        return size - 1;
    }
    return coordinate;
}

function getPixelNearby(image, x, y, diameter) {
    var dx = Math.random() * diameter - diameter / 2;
    var dy = Math.random() * diameter - diameter / 2;
    var nx = ensureInImage(x + dx, image.getWidth());
    var ny = ensureInImage(y + dy, image.getHeight());
    return image.getPixel(nx, ny);
}