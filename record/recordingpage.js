let xpos = 0;
let ypos = 0;

let mic;

let song, analyzer;


function setup() {

  window.onload = function() {
  var context = new AudioContext();
}
 
 createCanvas(windowWidth, windowHeight);
  frameRate(15);
  background(0);

   mic = new p5.AudioIn();
  mic.start();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  userStartAudio().then(function() {
   });

  let vol = mic.getLevel();
  fill(200*vol);
  stroke(255);

   ellipse(
    800+sin(xpos)*800+vol,
    500+sin(ypos)*150+vol,
    50, 50);
  xpos += 0.1360*vol;
  ypos += 0.1600+200*vol;
  
  ellipse(
    900+sin(xpos)*1000,
    600+sin(ypos)*1000,
    30, 30);

}