var stipX = new Array(0,10,20,30,40,50,60,70,80,90);
var stipY = new Array(0,10,20,30,40,50,60,70,80,90);
var diameter = 50;

function setup() {
  canvas = createCanvas(900,255);
  canvas.parent('processing');
  frameRate(10);
  noStroke();
}

function draw() {
    background(240);
    var i;
    for(i = 0; i < stipX.length; i++)
    {
        fill(stipY[i],50,150);
        ellipse(stipX[i], stipY[i],diameter);
    }
    stipX.push(mouseX);
    stipY.push(mouseY);
    stipX.shift();
    stipY.shift();
}