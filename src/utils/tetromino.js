export const ShapeType = {
  L: 'L',
  I: 'I',
  T: 'T',
  S: 'S',
  Z: 'Z',
  O: 'O',
  J: 'J',
}

export const ShapeOrientation = {
  Up: 0,
  Right: 1,
  Down: 2,
  Left: 3,
}

// Create a new Tetromino.
export function create(type) {
  return {
    type,
    orientation: ShapeOrientation.Up,
  };
}

// Get the current blocks for a piece and orientation.
export function getShape(tetromino) {
  return shapes[tetromino.type][tetromino.orientation];
}

// Rotate a Tetromino clockwise.
export function rotate(tetromino) {
  return {
    ...tetromino,
    orientation: nextOrientation(tetromino.orientation),
  };
}

function nextOrientation(n) {
  return (n + 1) % 4;
}

const shapes = {
  [ShapeType.L]: {
    [ShapeOrientation.Up]: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [ShapeOrientation.Right]: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    [ShapeOrientation.Down]: [
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    [ShapeOrientation.Left]: [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
  },

  [ShapeType.I]: {
    [ShapeOrientation.Up]: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [ShapeOrientation.Right]: [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ],
    [ShapeOrientation.Down]: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    [ShapeOrientation.Left]: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
  },

  [ShapeType.T]: {
    [ShapeOrientation.Up]: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [ShapeOrientation.Right]: [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0],
    ],
    [ShapeOrientation.Down]: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    [ShapeOrientation.Left]: [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
  },

  [ShapeType.S]: {
    [ShapeOrientation.Up]: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    [ShapeOrientation.Right]: [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
    [ShapeOrientation.Down]: [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
    [ShapeOrientation.Left]: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
  },

  [ShapeType.Z]: {
    [ShapeOrientation.Up]: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    [ShapeOrientation.Right]: [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ],
    [ShapeOrientation.Down]: [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ],
    [ShapeOrientation.Left]: [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
  },

  [ShapeType.O]: {
    [ShapeOrientation.Up]: [
      [1, 1],
      [1, 1],
    ],
    [ShapeOrientation.Right]: [
      [1, 1],
      [1, 1],
    ],
    [ShapeOrientation.Down]: [
      [1, 1],
      [1, 1],
    ],
    [ShapeOrientation.Left]: [
      [1, 1],
      [1, 1],
    ],
  },

  [ShapeType.J]: {
    [ShapeOrientation.Up]: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [ShapeOrientation.Right]: [
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [ShapeOrientation.Down]: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
    ],
    [ShapeOrientation.Left]: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
  },
};
