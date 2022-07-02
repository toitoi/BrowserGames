let snake;
let food;
let rate = 10;
let scl = 20;
const growSize = 1;

function setup() {
  createCanvas(windowWidth - 100, windowHeight - 100);
  snake = new Snake();
  food = new Food();

  frameRate(rate);
}

function draw() {
  frameRate(rate);

  background(0);

  snake.death();
  snake.update();
  snake.show();

  food.show();

  if (snake.pos.equals(food.pos)) {
    food.location();
    snake.eat(growSize);
    rate += growSize;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW || key === "k") {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW || key === "j") {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW || key === "l") {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW || key === "h") {
    snake.dir(-1, 0);
  } else if (keyCode === ALT) {
    snake.eat(growSize);
  }
}
