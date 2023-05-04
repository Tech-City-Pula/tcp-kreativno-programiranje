function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(random(0, width), random(0, height), random(10, 100));
}
