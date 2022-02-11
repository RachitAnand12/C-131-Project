
function preload() {
    img = loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(675,450);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects!";
}

function modelLoaded() {
    console.log("CocoSSD has been loaded!");
}

function draw() {
    image(img, 0, 0, 675, 450);
    percent = Math.floor(objects[i].confidence * 100);
    fill("#428bff");
    noFill();
    stroke("#428bff");
    text("Bed");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
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