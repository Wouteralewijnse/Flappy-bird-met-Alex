var yVal; 
var accel; 
var velocity; 
var mass; 
var ellipse;
{
}

class Pipe {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
  }

  drawPipe() {
    fill("green")
    rect(this.x, this.y, 50, this.h);
    this.x = this.x - 5;
  }
}

var birb, pipe, pipe2;
var pipes = [];
var rects = [];

function setup() {
  createCanvas(640, 360);


  bg = loadImage("images/Achtergrond flappy bird.png")
  flappybird = loadImage("images/Flappy bird 2.png");
  yVal = 0;  
  velocity = 0; 
  mass = 40; 
  
  accel = mass * 0.01; 
}

function draw() {
  background(bg);
  fill("yellow");

  background(bg);


  if(frameCount % 80 == 0){
    //console.log("draw pipe!");

    let randomHeight = random(height - 150)

    pipes.push(new Pipe(700,0, randomHeight));
    pipes.push(new Pipe(700,randomHeight + 100, 1000));
  }

  pipes.forEach(p => p.drawPipe());
  
  velocity += accel; 
  yVal += velocity;
	image(flappybird, width/2,yVal, mass,mass); 
  if (yVal > height - mass/2) {
    velocity *= -0.6;
    yVal = height - mass/2;
  }
}

function keyPressed(spacebar) {
 yVal + 30;
 velocity= - 6;
}

