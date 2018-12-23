/**
 * @typedef {Object} Tetromino
 * @property {string} type
 * @property {number} x
 * @property {number} y
 * @property {number} orientation 
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
