import shapes from './shapes';

// Create a new Tetromino.
export function create(type) {
  return {
    type,
    orientation: 0,
  };
}

// Get the current blocks for a piece and orientation.
export function getShape(piece) {
  return shapes[piece.type][piece.orientation];
}

// Rotate a Tetromino clockwise.
export function rotate(piece) {
  return {
    ...piece,
    orientation: nextOrientation(piece.orientation),
  };
}

function nextOrientation(n) {
  return (n + 1) % 4;
}
