import shapes, { ShapeType } from './shapes';

type Orientation = 0 | 1 | 2 | 3;

interface Tetromino {
  type: ShapeType;
  orientation: Orientation;
}

// Create a new Tetromino.
export function create(type: ShapeType): Tetromino {
  return {
    type,
    orientation: 0,
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

function nextOrientation(n: number) {
  return (n + 1) % 4 as Orientation;
}
