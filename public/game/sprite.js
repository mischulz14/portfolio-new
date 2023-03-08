export class Sprite {
  constructor(config) {
    // set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // setup the shadow
    this.shadow = new Image();
    this.useShadow = config.useShadow || false;
    if (this.useShadow) {
      this.shadow.src = 'game/assets/shadow.png';
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

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
    const x = this.gameObject.x;
    const y = this.gameObject.y;

    this.isShadowLoaded &&
      ctx.drawImage(this.shadow, 0, 0, 64, 64, x + 3, y + 16, 64, 64);

    this.isLoaded && ctx.drawImage(this.image, 0, 0, 64, 64, x, y, 64, 64);
  }
}
