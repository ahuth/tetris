import { fill } from 'lodash';
import * as Point from './point';
import * as Randomizer from './randomizer';
import * as Tetromino from './tetromino';

// Create a new "board". Represented as a flat array of length 200, which is 10 columns wide by 20
// rows tall.
export function create() {
  return fill(new Array(200), 0, 0);
}

export function commitTetrominoToBoard(board, tetromino, position, value) {
  const shape = Tetromino.getShape(tetromino);
  const mappedBoard = board.slice();

  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      // If this part of the shape is "off", don't worry about it.
      if (shape[r][c] === 0) { continue; }

      const index = getBoardIndexFromPosition(Point.create(position.x + c, position.y + r));
      mappedBoard[index] = value;
    }
  }

  return mappedBoard;
}

export function moveDown(board, tetromino, position, randomizer) {
  const potentialPosition = Point.create(position.x, position.y + 1);

  if (isValid(board, tetromino, potentialPosition)) {
    return [board, tetromino, potentialPosition, randomizer];
  }

  const nextBoard = commitTetrominoToBoard(board, tetromino, position, 1);
  const [nextShape, nextRandomizer] = Randomizer.next(randomizer);
  const nextTetromino = Tetromino.create(nextShape);
  const nextPosition = Point.create(3, 0);

  return [nextBoard, nextTetromino, nextPosition, nextRandomizer];
}

// Move a tetromino left, if possible. Either way, return a position.
export function moveLeft(board, tetromino, position) {
  const potentialPosition = Point.create(position.x - 1, position.y);

  if (isValid(board, tetromino, potentialPosition)) {
    return potentialPosition;
  }

  return position;
}

// Move a tetromino right, if possible. Either way, return a position.
export function moveRight(board, tetromino, position) {
  const potentialPosition = Point.create(position.x + 1, position.y);

  if (isValid(board, tetromino, potentialPosition)) {
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
  const shape = Tetromino.getShape(tetromino);

  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      // If this part of the shape is "off", don't worry about it.
      if (shape[r][c] === 0) { continue; }

      // If the horizontal position is off the board, it's not valid.
      if (position.x + c < 0 || position.x + c > 9) { return false; }

      // If the vertical position is off the board, it's not valid.
      if (position.y + r < 0 || position.y + r > 19) { return false }

      // If this part of the shape is over a part of the board that's "on", it's not valid.
      const index = getBoardIndexFromPosition(Point.create(position.x + c, position.y + r));
      if (board[index] === 1) { return false; }
    }
  }

  return true;
}

function getBoardIndexFromPosition(position) {
  return position.x + (position.y * 10);
}
