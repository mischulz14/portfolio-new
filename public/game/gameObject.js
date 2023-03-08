import { Sprite } from './sprite.js';

export class GameObject {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new Sprite({
      gameObject: this,
      src:
        config.src ||
        'game/assets/lab-character-spritesheet-medium-white-eyes.png',
      useShadow: config.useShadow || false,
    });
    // this.width = config.width;
    // this.height = config.height;
    // this.image = config.image;
    // this.ctx = config.ctx;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      // left cut
      0,
      // top cut
      0,
      // width cut
      64,
      // height cut
      64,
      // left position
      this.x,
      // top position
      this.y,
      // width
      this.width,
      // height
      this.height,
    );
  }
}
