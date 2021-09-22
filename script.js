var yVal; 
var accel; 
var velocity; 
var mass; 
var ellipse;

function setup() {
  createCanvas(640, 360);
  
  yVal = 0;  
  velocity = 0; 
  mass = 30; 
  
  accel = mass * 0.01; 
}

function draw() {
  background(0);
  fill(255,0,0);
  
  velocity += accel; 
  yVal += velocity;
	ellipse(width/2,yVal, mass,mass); 
  
  if (yVal > height - mass/2) {
    velocity *= -0.6;
    yVal = height - mass/2;
  }
}

function keyPressed(spacebar) {
 yVal + 30;
 velocity= - 6;
}

