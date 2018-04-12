var redValue = 0;
var greenValue = 0;
var blueValue = 0;
function setup() {
  createCanvas(640, 480);
}

function draw() {
  fill(200, 255, 200)
  stroke(200)
  rect(0, 0, 50, 50)

  fill(255, 200, 220)
  rect(100, 0, 50, 50)

  fill(200, 200, 255)
  rect(200, 0, 50, 50)

  if (mouseIsPressed && (mouseX <= 50 && mouseY <= 50)) {
    stroke(200)
    redValue = 200
    greenValue = 255
    blueValue = 200
  } else if(mouseIsPressed && (mouseX <= 100 && mouseY <= 50)) {
    stroke(200)
    redValue = 255
    greenValue = 200
    blueValue = 220
  } 

  fill(redValue, greenValue, blueValue);
  ellipse(mouseX, mouseY, 50, 50);
}
