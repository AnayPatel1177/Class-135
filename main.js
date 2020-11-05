video = "";
objects = [];
function preload() {
    video = createVideo('video.mp4');
    video.hide();
}
function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}
function draw() {
    image(video, 0, 0, 480, 380);
    if (status != "") {
        object.detect(video, gotResult);
        for(i = 0; i < objects.lenght, i++ ;) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detedted are : "+ objects.lenght;
            fill("FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects.y + 15);
            noFill();
            stroke("FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelLoaded() {
    console.log("ModelLoaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting objects";
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}