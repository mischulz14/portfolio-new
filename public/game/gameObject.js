import { Sprite } from './sprite.js';

export class GameObject {
  constructor(config) {
    this.x = config.x;
    this.y = config.y;
    this.direction = config.direction || 'down';
    this.sprite = new Sprite({
      gameObject: this,
      src:
        config.src ||
        'game/assets/lab-character-spritesheet-medium-white-eyes.png',
      useShadow: config.useShadow,
    });
  }

  update() {}
}
