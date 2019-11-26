var achtergrond;
var flatboyX = -140;
var flatboyBreedte = 258;
var flatboyHoogte = 237;
var animatie = [];
var aantalFrames = 15;
var huidigeFrame = 0;

function preload() {
  achtergrond = loadImage("images/backgrounds/green_grass_landscape.svg");
  for(var i = 1; i <= aantalFrames; i++)
  {
      nieweFrame = loadImage("images/sprites/flatboy/Jump(" + i + ").png");
      animatie.push(nieweFrame);
  }
}

function setup() {
  canvas = createCanvas(750,435);
  canvas.parent('processing');
  frameRate(20);
}

function draw() {
    background(255);
    background(achtergrond);
    image(animatie[huidigeFrame], flatboyX, 10, flatboyBreedte, flatboyHoogte);
    huidigeFrame++;
    huidigeFrame %= aantalFrames;
    flatboyX += 5;
    if (flatboyX >= 750)
    {
        flatboyX = -140;
    }
}