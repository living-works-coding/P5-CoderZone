
function setup(){
  createCanvas(600, 500);
  background(0);
}

function draw(){
// 5 circles written long hand.
  // ellipse(50, 300, 50, 50)
  // ellipse(100, 300, 50, 50)
  // ellipse(150, 300, 50, 50)
  // ellipse(200, 300, 50, 50)
  // ellipse(250, 300, 50, 50)

// 5 circles drawn with a loop!
  var x = 50
  var i = 1
  while(i <= 5){
    ellipse(x, 300, 50, 50)
    x = x + 50
    i = i + 1
  }
}




