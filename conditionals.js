var x = 0

function setup(){
  createCanvas(500, 500);
};

function draw(){
  background(0);

  fill(255)
  textSize(32);
  text("The value of x is: " + x, 10, 30);

  ellipse(x, 250, 50, 50);

  if(x < 250 ){
    x = x + 2
  }

};


