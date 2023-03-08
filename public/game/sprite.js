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
      idleDown: [[0, 0]],
    };
    this.currentAnimation = config.currentAnimation || 'idleDown';
    this.currentAnimationFrame = config.currentAnimationFrame || 0;

    // reference to the game object
    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x + 16;
    const y = this.gameObject.y - 10;

    this.isShadowLoaded &&
      ctx.drawImage(this.shadow, 0, 0, 64, 64, x + 3, y + 16, 64, 64);

    this.isLoaded && ctx.drawImage(this.image, 0, 0, 64, 64, x, y, 64, 64);
  }
}
