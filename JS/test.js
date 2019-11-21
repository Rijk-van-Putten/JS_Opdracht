function setup() {
  canvas = createCanvas(500, 500);
  background('lightgrey');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
    noStroke();

    // De cirkel
    fill(175, 150, 150);
    ellipse(0 + (176 / 2), 500 - (176 / 2), 176);

    // Het vierkant
    stroke(125, 75, 75);
    strokeWeight(40);
    rect(500 - 225 - 20, 0 + 20, 225, 255);

    // De transparante driehoek\
    noStroke();
    fill(255, 255, 0, 255/2);
    triangle(0, 200, 500, 0, 350, 500);
}