var redValue = 0;
var greenValue = 0;
var blueValue = 0;
function setup() {
  createCanvas(640, 480);
}

function draw() {

    stroke(200)
    redValue = random(200, 255)
    greenValue = random(200, 255)
    blueValue = random(200, 255)

  fill(redValue, greenValue, blueValue);


  if (mouseIsPressed){
	  translate(mouseX, mouseY);
	  noStroke();
	  for (var i = 0; i < 10; i ++) {
	    ellipse(0, 30, 20, 80);
	    rotate(PI/5);
	  }
	} else {
		ellipse(mouseX, mouseY, 50, 50);
	}
  // ellipse(mouseX, mouseY, 50, 50);
}

function drawFlower(){
	  translate(mouseX, mouseY);
	  noStroke();
	  for (var i = 0; i < 10; i ++) {
	    ellipse(0, 30, 20, 80);
	    rotate(PI/5);
	}
}