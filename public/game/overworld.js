export class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
    image.src = 'game/assets/lab_incident.png';

    const x = 0;
    const y = 0;

    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(shadow, 0, 0, 64, 64, x + 3, y + 16, 64, 64);
    };
    shadow.src = 'game/assets/shadow.png';

    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
        hero,
        // left cut
        0,
        // top cut
        0,
        // width cut
        64,
        // height cut
        64,
        // left position
        x,
        // top position
        y,
        // width
        64,
        // height
        64,
      );
    };
    hero.src = 'game/assets/lab-character-spritesheet-medium.png';
  }
}
