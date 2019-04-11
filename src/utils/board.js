import { fill } from 'lodash';
import * as Point from './point';
import * as Randomizer from './randomizer';
import * as Tetromino from './tetromino';

// Create a new "board". Represented as a flat array of length 200, which is 10 columns wide by 20
// rows tall.
export function create(height, width) {
  return fill(new Array(height * width), 0, 0);
}

export function commitTetrominoToBoard(board, tetromino, position, value, columns) {
  const shape = Tetromino.getShape(tetromino);
  const mappedBoard = board.slice();

  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      // If this part of the shape is "off", don't worry about it.
      if (shape[r][c] === 0) { continue; }

      const index = getBoardIndexFromPosition(Point.create(position.x + c, position.y + r), columns);
      mappedBoard[index] = value;
    }
  }

  return mappedBoard;
}

export function moveDown(board, current, next, position, randomizer, columns) {
  const potentialPosition = Point.create(position.x, position.y + 1);

  if (isValid(board, current, potentialPosition, columns)) {
    return [board, current, next, potentialPosition, randomizer];
  }

  const nextBoard = commitTetrominoToBoard(board, current, position, 1, columns);
  const [nextShape, nextRandomizer] = Randomizer.next(randomizer);
  const nextNext = Tetromino.create(nextShape);
  const nextPosition = Point.create(3, 0);

  return [nextBoard, next, nextNext, nextPosition, nextRandomizer];
}

// Move a tetromino left, if possible. Either way, return a position.
export function moveLeft(board, tetromino, position, columns) {
  const potentialPosition = Point.create(position.x - 1, position.y);

  if (isValid(board, tetromino, potentialPosition, columns)) {
    return potentialPosition;
  }

  return position;
}

// Move a tetromino right, if possible. Either way, return a position.
export function moveRight(board, tetromino, position, columns) {
  const potentialPosition = Point.create(position.x + 1, position.y);

  if (isValid(board, tetromino, potentialPosition, columns)) {
    return potentialPosition;
  }

  return position;
}

// Rotate a tetromino, if possible. Either way, return a tetromino.
export function rotate(board, tetromino, position, columns) {
  const potentialTetromino = Tetromino.rotate(tetromino);

  if (isValid(board, potentialTetromino, position, columns)) {
    return potentialTetromino;
  }

  return tetromino;
}

// Determine if a tetromino at a certain position on the board is "valid". In other words, doesn't
// overlap with any existing filled spots and is completely on the board.
function isValid(board, tetromino, position, columns) {
  const shape = Tetromino.getShape(tetromino);
  const maxColIndex = columns - 1;
  const maxRowIndex = (board.length / columns) - 1;

  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      // If this part of the shape is "off", don't worry about it.
      if (shape[r][c] === 0) { continue; }

      // If the horizontal position is off the board, it's not valid.
      if (position.x + c < 0 || position.x + c > maxColIndex) { return false; }

      // If the vertical position is off the board, it's not valid.
      if (position.y + r < 0 || position.y + r > maxRowIndex) { return false }

      // If this part of the shape is over a part of the board that's "on", it's not valid.
      const index = getBoardIndexFromPosition(Point.create(position.x + c, position.y + r), columns);
      if (board[index] === 1) { return false; }
    }
  }

  return true;
}

function getBoardIndexFromPosition(position, columns) {
  return position.x + (position.y * columns);
}
