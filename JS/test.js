var rotation = 0;

function setup() {
    var canvas = createCanvas(1000, 900);
    canvas.parent('processing');
    angleMode(DEGREES); 
    frameRate(15);
}

function draw() {
    background('grey');
    rotation++;
    if(!keyIsDown(DOWN_ARROW))
    {
        rotation = constrain(rotation, 0, 10);
    }
    push();
    fill(random(255), random(255), random(255));
    rotate(rotation);
    rectMode(CENTER);
    scale(2);
    rect(300, 100, 100, 100);
    pop();
}