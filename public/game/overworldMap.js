import { utils } from './utils.js';
import { Person } from './person.js';
import { GameObject } from './gameObject.js';

export class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects || [];

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

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

window.OverworldMaps = {
  Laboratory: {
    lowerSrc: 'game/assets/test-bg-2.png',
    upperSrc: '',
    gameObjects: {
      hero: new Person({
        x: utils.withGrid(0),
        y: utils.withGrid(0),
        useShadow: true,
        isPlayerControlled: true,
      }),
      npc1: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(10),
        useShadow: true,
        isPlayerControlled: false,
      }),
    },
  },
};
