function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // kuća
  rect(200, 300, 100);
  triangle(180, 300, 320, 300, 250, 220);

  // sunce
  ellipse(100, 100, 50);

  // trava
  const x = 10;
  const times = 40;
  for (let i = 1; i < times; i++) {
    line(x * i, 400, x * i, 380);
  }
}
