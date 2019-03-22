import shapes, { ShapeType } from './shapes';

interface Tetromino {
  type: ShapeType;
  orientation: number;
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
  return (n + 1) % 4;
}
