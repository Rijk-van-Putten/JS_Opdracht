function setup() {
  canvas = createCanvas(910,200);
  canvas.parent('processing');
  noLoop();
  background('gainsboro');
  angleMode(DEGREES);
  rectMode(CENTER);

  
    stroke('lemonchiffon')
    strokeWeight(5);
    fill('plum');
}

function draw() {
    var i;
    for (i = 0; i < 8; i++) {
        
        if (i == 0)
            translate(30 + 40,100);
        else
            translate(80 + 30, 0);
        
        push();
        rotate(i * (90 / 6));
        
        rect(0,0,80,80);
        pop();
    }
}
