class Snake {
  constructor() {
    this.pos = createVector(0, 0);
    this.vel = createVector(scl, 0);
    this.total = 0;
    this.tail = [];
  }

  dir(x, y) {
    this.vel.x = x * scl;
    this.vel.y = y * scl;
  }

  eat(size) {
    this.total += size;
  }

  death() {
    for (let i = 0; i < this.total; i++) {
      if (this.pos.equals(this.tail[i])) {
        this.tail = [];
        this.total = 0;
        rate = 10;
      }
    }
  }

  update() {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.pos.x, this.pos.y);

    this.pos.add(this.vel);

    this.pos.x = constrain(this.pos.x, 0, width - scl);
    this.pos.y = constrain(this.pos.y, 0, height - scl);
  }

  show() {
    fill(255);

    for (let j = 0; j < this.total; j++) {
      rect(this.tail[j].x, this.tail[j].y, scl, scl);
    }

    rect(this.pos.x, this.pos.y, scl, scl);
  }
}
