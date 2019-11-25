var perkament;
var p;
var pX = 30;
var pY = 40;
var margeHorizontaal = 125;
var margeVerticaal = 50;
var hoogte = 180;

function preload() {
    perkament = loadImage("images/backgrounds/perkament.svg");
    p = loadImage("images/sprites/potlood_400.png");
}


function setup() {
    canvas = createCanvas(944,637);
    canvas.parent('processing');
}

function draw() {
    background('cornsilk');
    background(perkament);
    pX = mouseX;
    pY = mouseY - hoogte;
    pX = constrain(pX, margeHorizontaal, 944 - margeHorizontaal);
    pY = constrain(pY, margeVerticaal - hoogte, 637 - margeVerticaal - hoogte);
    image(p, pX, pY);
}