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
      '16,16': true,
      [utils.asGridCoord(7, 6)]: true,
    },
  },
};
