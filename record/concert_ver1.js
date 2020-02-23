
let xpos = 0;
let ypos = 0;

function setup() {
  createCanvas(1500, 1000);
  background(0);
  frameRate(15);
}
function draw() {
  
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse(
    800+sin(xpos)*400,
    500+sin(ypos)*150,
    50, 50);
  xpos += 0.1;
  ypos += 0.1;
  
  ellipse(
    1000+sin(xpos)*1000,
    700+sin(ypos)*700,
    10, 10);
  xpos += 0.05;
  ypos += 0.04;
}