function setup() {
  createCanvas(800, 600);
// }

// function draw() {

  fill(204, 101, 192, 127);
  stroke(127, 63, 120);
 
  // A design for a simple flower
  translate(300, 200);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }

  fill(0, 200, 200, 127);
  stroke(127, 63, 120);

  // A design for a simple flower
  translate(10, 20);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
}

  fill(255, 100, 199, 127);
  stroke(127, 63, 120);

  // A design for a simple flower
  translate(10, 20);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }

  fill(255, 255, 0, 127);
  stroke(127, 63, 120);

  // A design for a simple flower
  translate(10, 20);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
}
