function upload(){
    var textInput = document.getElementById("fileInput");
    var image = new SimpleImage(textInput);
    var canvas = document.getElementById("canv1");
    image.drawTo(canvas);
}