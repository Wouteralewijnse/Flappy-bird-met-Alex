var yVal; 
var accel; 
var velocity; 
var mass; 


function setup() {
  createCanvas(640, 360);
  
  yVal = 0;  
  velocity = 0; 
  mass = 30; 
  
  accel = mass * 0.1; 
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


function mousePressed() {
  yVal = 0;  
  velocity = 0; 
}

