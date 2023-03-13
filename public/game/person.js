import { GameObject } from './gameObject.js';

export class Person extends GameObject {
  constructor(config) {
    super(config);

    this.movingProgressRemaining = 0;

    this.isPlayerControlled = config.isPlayerControlled || false;

    this.directionUpdate = {
      up: ['y', -2],
      down: ['y', 2],
      left: ['x', -2],
      right: ['x', 2],
    };
  }

  update(state) {
    this.updateSprite(state);
    this.updatePosition();

    if (
      this.isPlayerControlled &&
      this.movingProgressRemaining === 0 &&
      state.arrow
    ) {
      console.log('state', state);
      console.log('walls', state.map.walls);
      const x =
        state.arrow === 'left'
          ? this.x - 32
          : state.arrow === 'right'
          ? this.x + 32
          : this.x;
      const y =
        state.arrow === 'up'
          ? this.y - 32
          : state.arrow === 'down'
          ? this.y + 32
          : this.y;
      this.direction = state.arrow;
      console.log('direction', this.direction);
      console.log('space taken', state.map.isSpaceTaken(x, y, this.direction));
      console.log('current x', x);
      console.log('current y', y);
      // console.log('direction', this.direction);
      this.movingProgressRemaining = 16;
    }
  }

  updatePosition() {
    // console x and y position
    // console.log('x', this.x);
    // console.log('y', this.y);
    /*
    Updates the position of the person by moving them in the current direction
    until the movingProgressRemaining is zero.
    If movingProgressRemaining is greater than zero, the person's position is updated
    by one unit in the direction specified in the constructor.
    For example, if direction is set to "right" in the constructor, the person's x
    position will be increased by one unit each time updatePosition is called.
    This function assumes that the direction property of the person is a valid key in
    the directionUpdate object, which maps each direction to an array containing the
    axis to update and the direction of the update (i.e., positive or negative).
    */
    if (this.movingProgressRemaining > 0) {
      const [axis, direction] = this.directionUpdate[this.direction];
      this[axis] += direction;
      // console.log('axis', axis);
      this.movingProgressRemaining -= 1;

      // console.log what is happening to the x and y position
      // console.log('moved to x', this.x);
      // console.log('moved to y', this.y);
    }
  }

  updateSprite(state) {
    if (
      this.isPlayerControlled &&
      this.movingProgressRemaining === 0 &&
      !state.arrow
    ) {
      this.sprite.setAnimation('idle-' + this.direction);
      return;
    }

    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimation('walk-' + this.direction);
    }
  }
}
