import { utils } from './utils.js';
import { Person } from './person.js';

export class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects || [];
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;

    this.lowerImage.onload = () => {
      console.log('lower image loaded');
    };
    this.upperImage.onload = () => {
      console.log('upper image loaded');
    };
    this.lowerImage.onerror = () => {
      console.log('error loading lower image');
    };
    this.upperImage.onerror = () => {
      console.log('error loading upper image');
    };
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(20.5) - cameraPerson.x,
      utils.withGrid(12) - cameraPerson.y,
    );
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      utils.withGrid(20.5) - cameraPerson.x,
      utils.withGrid(12) - cameraPerson.y,
    );
  }

  isSpaceTaken(currentX, currentY, direction) {
    // console.log('x', currentX);
    // console.log('y', currentY);
    // const { x, y } = utils.nextPosition(currentX, currentY, direction);
    // console.log(
    //   'this walls coordinates',
    //   this.walls,
    //   'x to come',
    //   x,
    //   'y to come',
    //   y,
    // );
    return this.walls[`${currentX},${currentY}`] || false;
  }
}

window.OverworldMaps = {
  Laboratory: {
    lowerSrc: 'game/assets/test-bg-3.png',
    upperSrc: '',
    gameObjects: {
      hero: new Person({
        x: utils.withGrid(11),
        y: utils.withGrid(12),
        useShadow: true,
        isPlayerControlled: true,
      }),
    },
    walls: {
      [utils.asGridCoord(3, 4)]: true,
      [utils.asGridCoord(3, 6)]: true,
      [utils.asGridCoord(5, 4)]: true,
      [utils.asGridCoord(5, 6)]: true,
    },
  },
};
