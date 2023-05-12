noseX = 0;
noseY = 0;

function preload() {
    Mustache = loadImage('Mustache.png');
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 400, 300);
    image(Mustache, noseX - 35, noseY - 15, 70, 70);
}

function takeSnapshot() {
    save('Mustache.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

//Made by Swaroop Lingsugur©