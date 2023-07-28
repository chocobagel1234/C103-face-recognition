Webcam.set({
    width:400,
    height:229,
    image_format : 'png',
    png_quality:100
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='capured_image' src='" +data_uri+"'/>";
    });
}
 console.log("ml5 version:", ml5.version);

 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qx8eVoEJR/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}
