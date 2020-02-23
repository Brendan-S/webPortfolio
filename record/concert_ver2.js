let xpos = 0;
let ypos = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(15);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  noFill();
  stroke(255);
  strokeWeight(2);

  
  ellipse(
    800+sin(xpos)*800,
    500+sin(ypos)*150,
    50, 50);
  xpos += 0.1360;
  ypos += 0.1600;
  
  ellipse(
    900+sin(xpos)*1000,
    600+sin(ypos)*1000,
    30, 30);
}