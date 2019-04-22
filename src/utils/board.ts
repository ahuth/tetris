import { fill } from 'lodash';
import * as Point from './point';
import * as Randomizer from './randomizer';
import * as Tetromino from './tetromino';

export type Type = Board;

interface Board {
  columns: number;
  fill: number[];
  length: number;
}

// Create a new board.
export function create(height: number, width: number): Board {
  const filled = fill(new Array(height * width), 0, 0);

  return {
    columns: width,
    fill: filled,
    length: filled.length,
  };
}

// Add a tetromino to a board.
export function commitTetrominoToBoard(
  board: Board,
  tetromino: Tetromino.Type,
  position: Point.Type,
  value: number,
): Board {
  const shape = Tetromino.getShape(tetromino);
  const mappedBoard = clone(board);

  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      // If this part of the shape is "off", don't worry about it.
      if (shape[r][c] === 0) { continue; }

      const index = getBoardIndexFromPosition(board, Point.create(position.x + c, position.y + r));
      setAtIndex(mappedBoard, index, value);
    }
  }

  return mappedBoard;
}

// Move a tetromino down, if possible. If not possible, add the tetromino to the board and create a
// new tetromino.
export function moveDown(
  board: Board,
  current: Tetromino.Type,
  next: Tetromino.Type,
  position: Point.Type,
  randomizer: Randomizer.Type,
): [Board, Tetromino.Type, Tetromino.Type, Point.Type, Randomizer.Type] {
  const potentialPosition = Point.create(position.x, position.y + 1);

  if (isValid(board, current, potentialPosition)) {
    return [board, current, next, potentialPosition, randomizer];
  }

  const nextBoard = commitTetrominoToBoard(board, current, position, 1);
  const [nextShape, nextRandomizer] = Randomizer.next(randomizer);
  const nextNext = Tetromino.create(nextShape);
  const nextPosition = Point.create(3, 0);

  return [nextBoard, next, nextNext, nextPosition, nextRandomizer];
}

// Move a tetromino left, if possible. Either way, return a position.
export function moveLeft(board: Board, tetromino: Tetromino.Type, position: Point.Type) {
  const potentialPosition = Point.create(position.x - 1, position.y);

  if (isValid(board, tetromino, potentialPosition)) {
    return potentialPosition;
  }

  return position;
}

// Move a tetromino right, if possible. Either way, return a position.
export function moveRight(board: Board, tetromino: Tetromino.Type, position: Point.Type) {
  const potentialPosition = Point.create(position.x + 1, position.y);

  if (isValid(board, tetromino, potentialPosition)) {
    return potentialPosition;
  }

  return position;
}

// Rotate a tetromino, if possible. Either way, return a tetromino.
export function rotate(board: Board, tetromino: Tetromino.Type, position: Point.Type) {
  const potentialTetromino = Tetromino.rotate(tetromino);

  if (isValid(board, potentialTetromino, position)) {
    return potentialTetromino;
  }

  return tetromino;
}

// Determine if a tetromino at a certain position on the board is "valid". In other words, doesn't
// overlap with any existing filled spots and is completely on the board.
function isValid(board: Board, tetromino: Tetromino.Type, position: Point.Type) {
  const shape = Tetromino.getShape(tetromino);
  const maxColIndex = board.columns - 1;
  const maxRowIndex = (board.length / board.columns) - 1;

  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      // If this part of the shape is "off", don't worry about it.
      if (shape[r][c] === 0) { continue; }

      // If the horizontal position is off the board, it's not valid.
      if (position.x + c < 0 || position.x + c > maxColIndex) { return false; }

      // If the vertical position is off the board, it's not valid.
      if (position.y + r < 0 || position.y + r > maxRowIndex) { return false }

      // If this part of the shape is over a part of the board that's "on", it's not valid.
      const index = getBoardIndexFromPosition(board, Point.create(position.x + c, position.y + r));
      if (getAtIndex(board, index) === 1) { return false; }
    }
  }

  return true;
}

// Execute a callback for every location on a board, and return the resulting array.
export function map(board: Board, callback: (x: number) => unknown) {
  return board.fill.map(callback);
}

function getBoardIndexFromPosition(board: Board, position: Point.Type) {
  return position.x + (position.y * board.columns);
}

function clone(board: Board): Board {
  return {
    ...board,
    fill: board.fill.slice(),
  };
}

function getAtIndex(board: Board, index: number) {
  return board.fill[index];
}

function setAtIndex(board: Board, index: number, value: number): void {
  board.fill[index] = value;
}
