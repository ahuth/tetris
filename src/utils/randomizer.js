import { shuffle } from 'lodash';
import { ShapeType } from './tetromino';

// Create a new randomizer object, which s passed in to the other methods in this module to get
// random numbers. See http://tetris.wikia.com/wiki/Random_Generator.
export function create() {
  return shuffle(Object.keys(ShapeType));
}

// Retrieve the next number. Returns an array with value and the next randomizer.
//
// Example:
//
//   [val, randomizer] = next(randomizer);
//
export function next(randomizer) {
  const [head, ...tail] = randomizer;

  if (tail.length > 0) {
    return [head, tail];
  }

  return [head, create()];
}
