// Spend 15 minutes changing the previous example, by controlling the colors,
//  using a different shape than ellipse or adding something else to the sketch.

// If you are not sure what to do, just try to change the numbers one by one and see what happens!

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  fill(random(200, 255), random(0, 255), random(30, 50));
  ellipse(random(0, width), random(0, height), random(10, 100));
  rect(random(0, width), random(0, height), random(10, 100));
}
