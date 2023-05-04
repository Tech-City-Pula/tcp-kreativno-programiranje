function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if (mouseIsPressed) {
    myBrush(mouseX, mouseY);
  }
}

function myBrush(x, y) {
  ellipse(random(x - 20, x + 20), random(y - 20, y + 20), 10);
}

function keyTyped() {
  if (key == " ") {
    background(220);
  }
}
