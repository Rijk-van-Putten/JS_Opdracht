var spoor = {
  grijsTint: 150,
  y: 200,
  dikte: 5,
  test: null,
  
  teken() {
    push();
    fill(this.grijsTint);
    rect(0,this.y,canvas.width,this.dikte);
    pop();
  }
}

var trein;

function preload() {
  winter = loadImage("images/backgrounds/Winter.png");
  stoomTrein = loadImage("images/sprites/stoomtrein.png");
  trein = new Trein(stoomTrein);
}

function setup() {
  canvas = createCanvas(winter.width,winter.height);
  canvas.parent('processing');
  frameRate(50);
}

function draw() {
  background(255);
  background(winter);
  trein.beweeg();
  trein.toon();
  spoor.teken();
}

class Trein {
    constructor(sprite)
    {
        this.x = 5000;
        this.y = 500;
        this.snelheid = -30;
        this.schaal = 5;
        this.sprite = sprite;
    }

    toon()
    {
        push();
        scale(1/5);
        image(this.sprite, this.x, this.y);
        pop();
    }

    beweeg()
    {
        this.x += this.snelheid;
        if (this.x < -1000)
        {
            this.x = 5000;
        } else if (this.x > 5000)
        {
            this.x = -1000;
        }

        if (keyIsDown(RIGHT_ARROW))
        {
            this.snelheid += 5;
        }
        
        if (keyIsDown(LEFT_ARROW))
        {
            this.snelheid -= 5;
        }
        this.snelheid = constrain(this.snelheid, -60, 60);
    }
}