function preload(){
}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(650, 300);
    video=createCapture(VIDEO);
    video.hide();
}


function draw(){
    image(video, 220, 150, 220, 200);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(580, 420, 80);
    circle(580, 60, 80);
    circle(60, 60, 80);
    circle(60, 420, 80);

    fill(0, 0, 128);
    stroke(0, 0, 128);
    rect(100, 50, 440, 20);
    rect(100, 410, 440, 20);
    rect(50, 100, 20, 280);
    rect(570, 100, 20, 280);
}

function take_snapshot(){
    save('Image.jpg');
}
