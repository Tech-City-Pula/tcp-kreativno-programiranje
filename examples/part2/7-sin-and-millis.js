function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, sin(millis() / 1000) * 50 + 50);
  }
}
