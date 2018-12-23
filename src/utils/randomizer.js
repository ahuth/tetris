import { range, shuffle } from 'lodash';

/**
 * @typedef {number[]} Randomizer
 */

/**
 * @typedef {array} ReturnValue
 * @property {number} 0 - Next number
 * @property {Randomizer} 1 - Next randomizer
 */

/**
 * Create a new randomizer object, which is passed in to the other methods in this module to get
 * random numbers.
 * @returns {Randomizer}
 * @see http://tetris.wikia.com/wiki/Random_Generator
 */
export function create() {
  return shuffle(range(7));
}

/**
 * See the next number.
 * @param {Randomizer} randomizer
 * @returns {number}
 */
export function peek(randomizer) {
  return randomizer[0];
}

/**
 * Get the next number and a new randomizer.
 * @param {Randomizer} randomizer
 * @returns {ReturnValue}
 */
export function next(randomizer) {
  const [head, ...tail] = randomizer;

  if (tail.length > 0) {
    return [head, tail];
  }

  return [head, create()];
}
