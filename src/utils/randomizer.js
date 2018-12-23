import { range, shuffle } from 'lodash';

// Create a new randomizer object, whichi s passed in to the other methods in this module to get
// random numbers. See http://tetris.wikia.com/wiki/Random_Generator.
export function create() {
  return shuffle(range(7));
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
