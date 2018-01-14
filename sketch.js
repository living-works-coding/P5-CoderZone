// runs once
function setup() {
  createCanvas(500, 500);
  background(0);
}
// draw is an infinite loop
function draw(){
  // Fill and stroke determine the color of our shape.
  // We define those colors by saying how much RED GREEN AND BLUE we want.
  // Both of these have 0 Red color, 255 Green color, and 0 Red color. 255 is the highest color number we can use.
  fill(0, 255, 0);
  stroke(0, 255, 0);

  // body
  rect(240, 190, 20, 150 );

  // head
  ellipse(250, 150, 100, 100);

  // arms
  line(250, 250, 180, 180)
  line(250, 250, 320, 180)

  // legs
  line(240, 340, 180, 400)
  line(260, 340, 320, 400)
}


