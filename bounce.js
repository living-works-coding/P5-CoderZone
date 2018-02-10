var x = 175;
var y = 250;
var bounceVariance = 0;
var goingUp = true;

// runs once
function setup() {
  createCanvas(500, 500);
}

// draw is an infinite loop
function draw() {
  background(0);

  fill(255, 45, 57);


  if (bounceVariance <= 25 && goingUp) {
    bounceVariance += 1;
  }

  if (bounceVariance === 25 || bounceVariance === -25) {
    goingUp = !goingUp;
  }

  if (bounceVariance >= -25 && !goingUp) {
    bounceVariance -= 1;
  }

  var i = 0;
  while (i < 5) {
    if (i % 2 === 1) {
      ellipse(x + i * 25, y + bounceVariance, 25, 25);
    } else {
      ellipse(x + i * 25, y - bounceVariance, 25, 25);
    }
    i = i + 1;
  }
}
