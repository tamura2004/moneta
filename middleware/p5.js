import p5 from "p5";

function runner(p5) {
  const HEIGHT = 100;
  const SIZE = HEIGHT / 2;
  const LETTERS = "MONETA";
  const GAP = p5.windowWidth / (LETTERS.length + 3);

  let chars = LETTERS.split("").map((letter, index) => ({ letter, index }));
  let toggle = true;

  p5.setup = () => {
    const canvas = p5.createCanvas(p5.windowWidth, HEIGHT);
    canvas.parent("p5");
    for (const char of chars) {
      char.size = SIZE;
      char.ox = char.x = GAP * (char.index + 2) - SIZE / 2;
      char.oy = char.y = (HEIGHT + SIZE) / 2;
      char.vx = 2.5 - char.index;
      char.vy = (2.5 - char.index) / 10;
      char.color = char.index * 18;
    }
  };

  p5.draw = () => {
    p5.background(254);
    for (const char of chars) {
      if (p5.mouseIsPressed) {
        char.vx = (char.ox - char.x) / 20;
        char.vy = (char.oy - char.y) / 20;
      }
      if (char.x < 0 || p5.windowWidth < char.x + SIZE) {
        char.vx = -char.vx;
      }
      if (char.y < SIZE || HEIGHT < char.y) {
        char.vy = -char.vy;
      }
      char.x += char.vx;
      char.y += char.vy;

      p5.colorMode(p5.HSB, 100);
      p5.fill(char.color, 20, 100);
      p5.strokeWeight(6);
      p5.stroke(0, 0, 30);

      p5.textStyle(p5.BOLD);
      p5.textSize(char.size);
      p5.text(char.letter, char.x, char.y);
    }
  };

  p5.mouseReleased = () => {
    if (p5.mouseY > HEIGHT) {
      return;
    }
    for (const char of chars) {
      char.color = p5.int(p5.random(100));
      if (toggle) {
        char.vx = (char.x - p5.mouseX) / 30 + p5.randomGaussian(0, 2);
        char.vy = (char.y - p5.mouseY) / 30 + p5.randomGaussian(0, 2);
      } else {
        char.vx = 0;
        char.vy = 0;
      }
    }
    toggle = !toggle;
  };
}

export default function() {
  new p5(runner);
}
