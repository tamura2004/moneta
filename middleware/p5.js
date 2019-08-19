import p5 from "p5";

function runner(p5) {
  const HEIGHT = 150;
  const GAP = 150;
  const LEFT = (p5.windowWidth - GAP * 5) / 2;
  let chars = [
    { letter: "M", index: 0 },
    { letter: "O", index: 1 },
    { letter: "N", index: 2 },
    { letter: "E", index: 3 },
    { letter: "T", index: 4 },
    { letter: "A", index: 5 },
  ];
  let toggle = true;

  p5.setup = () => {
    const canvas = p5.createCanvas(p5.windowWidth, HEIGHT);
    canvas.parent("p5");
    for (const char of chars) {
      char.size = 60;
      char.x = LEFT + GAP * char.index - char.size / 2;
      char.y = (HEIGHT + char.size) / 2;
      char.ox = char.x;
      char.oy = char.y;
      char.vx = p5.random();
      char.vy = p5.random();
      char.color = p5.int(p5.random(100));
    }
  };

  p5.draw = () => {
    p5.background(254);
    for (const char of chars) {
      if (p5.mouseIsPressed) {
        char.vx = (char.ox - char.x) / 20;
        char.vy = (char.oy - char.y) / 20;
      }
      if (char.x < 0 || p5.windowWidth < char.x) {
        char.vx = -char.vx;
      }
      if (char.y < 0 || HEIGHT < char.y) {
        char.vy = -char.vy;
      }

      p5.colorMode(p5.HSB, 100);
      p5.fill(char.color, 20, 100);
      p5.strokeWeight(6);
      p5.stroke(0, 0, 30);

      char.x += char.vx;
      char.y += char.vy;
      p5.textStyle(p5.BOLD);
      p5.textSize(char.size);
      p5.text(char.letter, char.x, char.y);
    }
  };

  p5.mouseReleased = () => {
    if (toggle) {
      for (const char of chars) {
        char.vx = (char.x - p5.mouseX) / 30 + p5.randomGaussian(0, 2);
        char.vy = (char.y - p5.mouseY) / 30 + p5.randomGaussian(0, 2);
      }
    } else {
      for (const char of chars) {
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
