var yVal; 
var accel; 
var velocity; 
var mass; 
var ellipse;

class Pipe {
  constructor(x, y, h, w) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.color = "green";
    this.w = w;
  }

  drawPipe() {
    fill (this.color)
    rect(this.x, this.y, this.w, this.h);
    this.x = this.x - 5;
  }
  checkCollision() {
  if (width / 2 + 50 > this.x && (width / 2) < this.x + this.w) {
    if (yVal + mass - 10 > this.y && yVal < this.y + this.h) {
      gameState = 2;
      this.color = "red";
    }
  }
    else { 
      this.color = "green";
    }
  }
}

var pipe, pipe2;
var pipes = [];
var rects = [];

let gameState = 0

function setup() {
  createCanvas(640, 360);

  endBackground = loadImage("images/game over foto.png")
  presstart = loadImage("images/pressstart foto.png")
  bg = loadImage("images/Achtergrond flappy bird.png")
  flappybird = loadImage("images/Flappy bird 2.png");
  yVal = 0;  
  velocity = 0; 
  mass = 40; 
  
  accel = mass * 0.01; 
}
function draw() {


  if (gameState == 0) {
    startGame();
  } else if (gameState == 1) {
    playGame();
  } else if (gameState == 2) {
    finishGame();
  }
}
  
function game() {
  background(bg);
  fill("yellow");

  background(bg);


  if(frameCount % 80 == 0){
    //console.log("draw pipe!");

    let randomHeight = random(height - 150)

    pipes.push(new Pipe(700,0, randomHeight, 40));
    pipes.push(new Pipe(700,randomHeight + 100, 1000, 40));
  }

  pipes.forEach((p) => {
      p.drawPipe()
      p.checkCollision()
    });

  velocity += accel; 
  yVal += velocity;
	image(flappybird, width/2,yVal, mass,mass); 
  if (yVal > height - mass/2) {
    velocity *= -0.6;
    yVal = height - mass/2;
  }
}

function startGame() {
  background (presstart);
}

function playGame() {
  game();
}   

function finishGame() {
  background(endBackground);
}

function keyPressed(spacebar) {
  yVal + 40;
  // - mass gedeeld door 6 om bij elke mass een proportionele stuiter te krijgen
  velocity = -mass / 6;
}

function mousePressed() {
  console.log(gameState);
  if (gameState == 0) {
    gameState += 1;


  } else if (gameState == 2) {
    pipes = [];
    gameState = 0;
  }
}

