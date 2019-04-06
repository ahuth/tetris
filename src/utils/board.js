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
  if (canMoveLeft(board, tetromino, position)) {
    return Point.create(position.x - 1, position.y)
  }
  return position;
}

// Move a tetromino right, if possible. Either way, return a position.
export function moveRight(board, tetromino, position) {
  if (canMoveRight(board, tetromino, position)) {
    return Point.create(position.x + 1, position.y)
  }
  return position;
}

// Rotate a tetromino, if possible. Either way, return a tetromino.
export function rotate(board, tetromino, position) {
  if (canRotate(board, tetromino, position)) {
    return Tetromino.rotate(tetromino);
  }
  return tetromino;
}

function canMoveLeft(board, tetromino, position) {
  return true;
}

function canMoveRight(board, tetromino, position) {
  return true;
}

function canRotate(board, tetromino, position) {
  return true;
}
