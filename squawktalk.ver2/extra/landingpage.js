let t = 0; // time variable

function setup() {
  createCanvas(windowWidth, 1880);
  noStroke();
  fill(50, 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, 1880);
}

function draw() {
  background(0); 

  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
    
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
     
      const angle = xAngle * (x / width) + yAngle * (y / height);

     
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); 
    }
  }

  t = t + 0.01; 
}
