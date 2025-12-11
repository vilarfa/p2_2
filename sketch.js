let e = [];
let e1, e2;

function setup() {
  createCanvas(400, 400);
  textSize(20);
  for (let i = 0; i < 10; i++) {
    e[i] = new Emoji(random(width), random(height));
  }
  e1 = new Emoji(300, 200);
  e2 = new Emoji(10, 10);
}

function draw() {
  background(220);
  for (let i = 0; i < e.length; i++) {
    e[i].show();
    e[i].move();
  }
  e1.show();
  e1.move();
  e2.show();
  e2.move();
}

class Emoji {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    text('🎃', this.x, this.y);
  }

  move() {
    this.y += 1;
    if (this.y > height) {
      this.y = 0;
    }
  }
}