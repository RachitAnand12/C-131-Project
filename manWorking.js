function preload() {
    img = loadImage("manWorking.jpg");
}

function setup() {
    canvas = createCanvas(675,450);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects!";
}

function modelLoaded() {
    console.log("CocoSSd has been loaded!");
    objectDetector.detect(img, gotResult);
}

function draw() {
    image(img, 0, 0, 675, 450)
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}

function bthp() {
    window.location = "index.html";
}

if (status != "") {
    objectDetector.detect(img, gotResult);
    for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status: Objects Detected! ";
        percentange = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percentange + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}