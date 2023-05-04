function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  if (mouseIsPressed) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(mouseX, mouseY, sin(millis() / 1000) * 50 + 50);
  }
}
