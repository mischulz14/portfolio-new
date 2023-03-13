export const utils = {
  withGrid(n) {
    return n * 16;
  },
  asGridCoord(x, y) {
    return `${x * 16},${y * 16}`;
  },
  nextPosition(initialX, initialY, direction) {
    let x = initialX;
    let y = initialY;

    const size = 32;

    if (direction === 'up') {
      y -= size;
    } else if (direction === 'down') {
      y += size;
    } else if (direction === 'left') {
      x -= size;
    } else if (direction === 'right') {
      x += size;
    }

    return { x, y };
  },
};
