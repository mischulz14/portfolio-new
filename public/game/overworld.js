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

      // console.log('x', this.map.gameObjects.hero.x);
      // console.log('y', this.map.gameObjects.hero.y);

      // establish the camera
      const cameraPerson = this.map.gameObjects.hero;

      // draw lower layer
      this.map.drawLowerImage(this.ctx, cameraPerson);

      // draw the game objects
      Object.values(this.map.gameObjects).forEach((gameObject) => {
        // console.log('x', gameObject.x);
        // console.log('y', gameObject.y);
        gameObject.update({
          arrow: this.directionInput.direction,
          map: this.map,
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
    console.log(this.map.walls);

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();
  }
}
