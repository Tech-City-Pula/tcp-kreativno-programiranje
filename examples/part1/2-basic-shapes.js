function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  ellipse(50, 100, 50); // x, y, width, [height]
  line(100, 50, 150, 150); // x1, y1, x2, y2
  rect(200, 100, 50, 50); // x, y, width, [height]
  triangle(300, 100, 350, 150, 400, 100); // x1, y1, x2, y2, x3, y3
}
