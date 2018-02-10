x = 175;
y = 250;
bounceVariance = 0;
goingUp = true;

// runs once
function setup() {
  createCanvas(500, 500);
  background(0);
}

// draw is an infinite loop
function draw() {
  background(0);

  fill(255);
  textSize(32);
  word = 'Bounce';

  if (bounceVariance <= 25 && goingUp) {
    bounceVariance += 1;
  }

  if (bounceVariance === 25 || bounceVariance === -25) {
    goingUp = !goingUp;
  }

  if (bounceVariance >= -25 && !goingUp) {
    bounceVariance -= 1;
  }

  i = 0;
  while (i < word.length) {
    if (i % 2 === 1) {
      // text(word[i], x + i * 32, y + bounceVariance);
      ellipse(x + i * 25, y + bounceVariance, 25, 25);
    } else {
      // text(word[i], x + i * 32, y - bounceVariance);
      ellipse(x + i * 25, y - bounceVariance, 25, 25);
    }
    i = i + 1;
  }
}
