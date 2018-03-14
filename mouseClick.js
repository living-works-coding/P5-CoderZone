var redValue = 0;
var greenValue = 0;
var blueValue = 0;
function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(redValue, greenValue, blueValue);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 20, 0);
}


function mouseClicked() {
  redValue = random(0, 255)
  greenValue = random(0, 255)
  blueValue = random(0, 255)
}