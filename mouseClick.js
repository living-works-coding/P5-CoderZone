var redValue = 0;
var greenValue = 0;
var blueValue = 0;
function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    redValue = random(0, 255)
    greenValue = random(0, 255)
    blueValue = random(0, 255)
    fill(redValue, greenValue, blueValue);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 50, 50);
}
