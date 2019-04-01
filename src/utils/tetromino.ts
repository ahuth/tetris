export interface Tetromino {
  type: ShapeType;
  orientation: ShapeOrientation;
}

export enum ShapeType {
  L = 'L',
  I = 'I',
  T = 'T',
  S = 'S',
  Z = 'Z',
  O = 'O',
  J = 'J',
}

export enum ShapeOrientation {
  Up,
  Right,
  Down,
  Left,
}

// Create a new Tetromino.
export function create(type: ShapeType): Tetromino {
  return {
    type,
    orientation: ShapeOrientation.Up,
  };
}

// Get the current blocks for a piece and orientation.
export function getShape(piece: Tetromino) {
  return shapes[piece.type][piece.orientation];
}

// Rotate a Tetromino clockwise.
export function rotate(piece: Tetromino): Tetromino {
  return {
    ...piece,
    orientation: nextOrientation(piece.orientation),
  };
}

function nextOrientation(n: ShapeOrientation) {
  return (n + 1) % 4 as ShapeOrientation;
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
