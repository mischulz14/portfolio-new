export class DirectionInput {
  constructor() {
    this.heldDirections = [];

    this.map = {
      ArrowUp: 'up',
      KeyW: 'up',
      ArrowDown: 'down',
      KeyS: 'down',
      ArrowLeft: 'left',
      KeyA: 'left',
      ArrowRight: 'right',
      KeyD: 'right',
    };
  }

  get direction() {
    return this.heldDirections[0];
  }

  init() {
    document.addEventListener('keydown', (e) => {
      const direction = this.map[e.code];

      if (direction && !this.heldDirections.includes(direction)) {
        this.heldDirections.unshift(direction);
      }
      // explanation:
      // if the key pressed is a key that we care about (i.e., it is a key that
      // corresponds to a direction), and the direction is not already in the
      // heldDirections array, then add the direction to the heldDirections array
    });

    document.addEventListener('keyup', (e) => {
      const direction = this.map[e.code];
      const index = this.heldDirections.indexOf(direction);
      if (index > -1) {
        this.heldDirections.splice(index, 1);
      }
      // explanation:
      // if the key pressed is a key that we care about (i.e., it is a key that
      // corresponds to a direction), and the direction is in the heldDirections
      // array, then remove the direction from the heldDirections array
    });
  }
}
