import { utils } from './utils.js';

export class Sprite {
  constructor(config) {
    // set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
      console.log('sprite loaded');
    };

    // setup the shadow
    this.shadow = new Image();
    this.useShadow = config.useShadow;

    this.shadow.src = this.useShadow ? 'game/assets/shadow.png' : '';

    this.shadow.onload = () => {
      this.isShadowLoaded = true;
      console.log('shadow loaded');
    };
    if (!this.useShadow) {
      console.log('no shadow');
    }

    // configuring animation and initial state
    this.animations = config.animations || {
      'idle-down': [[0, 0]],
      'idle-left': [[0, 2]],
      'idle-right': [[0, 1]],
      'idle-up': [[0, 3]],
      'walk-down': [
        [1, 0],
        [0, 0],
        [3, 0],
        [0, 0],
      ],
      'walk-right': [
        [1, 1],
        [0, 1],
        [3, 1],
        [0, 1],
      ],
      'walk-left': [
        [1, 2],
        [0, 2],
        [3, 2],
        [0, 2],
      ],
      'walk-up': [
        [1, 3],
        [0, 3],
        [3, 3],
        [0, 3],
      ],
    };
    this.currentAnimation = config.currentAnimation || 'idleUp';
    this.currentAnimationFrame = config.currentAnimationFrame || 0;

    // to set up the time between frames
    this.animationFrameLimit = config.animationFrameLimit || 10;
    this.animationFrameProgress = this.animationFrameLimit;

    // reference to the game object
    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    // downtick frame progress
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    // reset frame progress
    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    // reset frame index if we've reached the end of the animation
    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  draw(ctx, cameraPerson) {
    const x = this.gameObject.x - 8 + utils.withGrid(21) - cameraPerson.x;
    const y = this.gameObject.y - 10 + utils.withGrid(12) - cameraPerson.y;

    this.isShadowLoaded &&
      ctx.drawImage(this.shadow, 0, 0, 64, 64, x + 3, y + 16, 64, 64);

    const [frameX, frameY] = this.frame;

    this.isLoaded &&
      ctx.drawImage(this.image, frameX * 64, frameY * 64, 64, 64, x, y, 64, 64);

    this.updateAnimationProgress();
  }
}
