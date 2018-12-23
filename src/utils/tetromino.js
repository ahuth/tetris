import shapes from './shapes';

/**
 * @typedef {Object} Tetromino
 * @property {string} type
 * @property {number} x
 * @property {number} y
 * @property {number} orientation
 */

/**
 * @typedef {Array.<Array.<number>>} Shape
 */

/**
 * Create a new Tetromino.
 * @param {string} type
 * @param {number} x
 * @param {number} y
 * @returns {Tetromino}
 */
export function create(type, x, y) {
  return {
    type,
    x,
    y,
    orientation: 0,
  };
}

/**
 * Get the current blocks for a piece and its orientation.
 * @param {Tetromino} piece
 * @returns {Shape}
 */
export function getShape(piece) {
  return shapes[piece.type][piece.orientation];
}

/**
 * Rotate a Tetromino clockwise.
 * @param {Tetromino} piece
 * @returns {Tetromino}
 */
export function rotate(piece) {
  return {
    ...piece,
    orientation: nextOrientation(piece.orientation),
  };
}

function nextOrientation(n) {
  return (n + 1) % 4;
}
