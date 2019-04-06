import { fill } from 'lodash';
import * as Point from './point';
import * as Tetromino from './tetromino';

// Create a new "board". Represented as a flat array of length 200, which is 10 columns wide by 20
// rows tall.
export function create() {
  return fill(new Array(200), 0, 0);
}

// Move a tetromino left, if possible. Either way, return a position.
export function moveLeft(board, tetromino, position) {
  const potentialPosition = Point.create(position.x - 1, position.y);

  if (isValid(board, potentialPosition, position)) {
    return potentialPosition;
  }
  return position;
}

// Move a tetromino right, if possible. Either way, return a position.
export function moveRight(board, tetromino, position) {
  const potentialPosition = Point.create(position.x + 1, position.y);

  if (isValid(board, potentialPosition, position)) {
    return potentialPosition;
  }
  return position;
}

// Rotate a tetromino, if possible. Either way, return a tetromino.
export function rotate(board, tetromino, position) {
  const potentialTetromino = Tetromino.rotate(tetromino);

  if (isValid(board, potentialTetromino, position)) {
    return Tetromino.rotate(tetromino);
  }
  return tetromino;
}

// Determine if a tetromino at a certain position on the board is "valid". In other words, doesn't
// overlap with any existing filled spots and is completely on the board.
function isValid(board, tetromino, position) {
  return true;
}
