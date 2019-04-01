import {
  nextOrientation,
  shapes,
  ShapeOrientation,
  ShapeType,
} from './shapes';

export interface Tetromino {
  type: ShapeType;
  orientation: ShapeOrientation;
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
