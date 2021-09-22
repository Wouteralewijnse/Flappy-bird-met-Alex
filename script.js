var yVal; 
var accel; 
var velocity; 
var mass; 
var ellipse;

function setup() {
  createCanvas(640, 360);
  

  flappybird = loadImage("images/Flappy bird 2.png");
  yVal = 0;  
  velocity = 0; 
  mass = 30; 
  
  accel = mass * 0.01; 
}

function draw() {
  background("lightblue");
  fill("yellow");
  
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

