var aantal = 50;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
    frameRate(5);
}

function draw() {
    for(x = 0; x < 9; x++)
    {
        for(y = 0; y < 9; y ++)
        {
          tekenRaster(x, y);
            var kans = int(random(1, 5));
            if (kans == 1)
                tekenStip(x,y);
        }
    }
}

function tekenRaster(x, y) {    
    push();
    fill('linen');
    strokeWeight(5);
    stroke(255);
    translate((x)*50,(y)*50);
    rect(0, 0, 50, 50);
    pop();
}

function tekenStip(x,y) {
  var str = 15;
  push();
  noStroke();
  fill(random(255), random(255), random(255));
  translate((x + 0.5)*50,(y + 0.5)*50);
  ellipse(0,0,str*2);
  pop();
}