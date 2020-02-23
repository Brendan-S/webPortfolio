let circles = []; 
let xpos=0; 
let ypos=0;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 50; i++) {
    circles.push(new Move());
 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(0);
  stroke(150);
  
  
  for (let i = 0; i < circles.length; i++) {
   circles[i].move();
    circles[i].display();
  }
}


class Move {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = (30, 30);
    this.speed = 0.5;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
