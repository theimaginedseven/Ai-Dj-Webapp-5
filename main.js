song1 = "";
song2 = "";
status = "";
status2
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;


function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000")
    stroke("#FF0000")

    if(song1.isPlaying = true) {
        status = true
    }
        else{
            status = false
        }
    

    if(song2.isPlaying = true) {
        status = true
    }
        else{
            status = false
        }
    

    if(status = false) {
            song1.stop()
    }
            else{
                song2.stop()
            }

    if(status = true){
        song1.play()
    }
    else{
        song2.play()
    }
    
    if(song2.isPlaying = true) {
        status2 = true
    }
    else{
        status2 = false
    }

    if(song1.isPlaying = true) {
        status2 = true
    }
    else{
        status2 = false
    }
    
    if(status2 = false) {
        song2.stop()
    }
    else{
        song1.stop()
    }
    
}

function modelLoaded() {
    console.log('PoseNet is Initialized')
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = resluts[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        console.log("scoreRightWrist = " + scoreLeftWrist)

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
        if(scoreLeftWrist > scoreRightWrist) {
            circle(leftWristX, leftWristY, 20);
            song2.stop();
            song1.play();
        }

        if(scoreRightWrist > scoreLeftWrist) {
            circle(rightWristX, rightWristY, 20)
            song1.stop();
            song2.play();
        }
    }
}