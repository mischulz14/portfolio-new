import { OverworldMap } from './overworldMap.js';
import { DirectionInput } from './directionInput.js';

export class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.map = null;
  }

  // GameLoop

  startGameLoop() {
    const step = () => {
      // clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // establish the camera
      const cameraPerson = this.map.gameObjects.hero;

      // draw lower layer
      this.map.drawLowerImage(this.ctx, cameraPerson);

      // draw the game objects
      Object.values(this.map.gameObjects).forEach((gameObject) => {
        gameObject.update({
          arrow: this.directionInput.direction,
        });
        gameObject.sprite.draw(this.ctx, cameraPerson);
      });

      // draw upper layer
      this.map.drawUpperImage(this.ctx, cameraPerson);

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  // initializing the game
  init() {
    this.map = new OverworldMap(window.OverworldMaps.Laboratory);

    this.directionInput = new DirectionInput();
    this.directionInput.init();
    this.directionInput.direction; // 'up', 'down', 'left', 'right'

    this.startGameLoop();
  }
}
