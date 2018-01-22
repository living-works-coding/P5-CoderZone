// Here we set your first variable for you! We called it 'x' because it is holding the value for the x coordinate of our ellipse that
var x = 50

function setup(){
  createCanvas(500, 500);
  background(0);
};

function draw(){
  // remember that when we draw an ellipse we need to give four different arguments: x, y, width, height.
  // What is the value of x in this ellipse?
  ellipse(x, 250, 50, 50);
};



