import { shuffle } from 'lodash';
import { ShapeType } from './tetromino';

export type Type = Randomizer;

type Randomizer = ShapeType[];

// Create a new randomizer object, which s passed in to the other methods in this module to get
// random numbers. See http://tetris.wikia.com/wiki/Random_Generator.
export function create(): Randomizer {
  return shuffle(Object.keys(ShapeType) as ShapeType[]);
}

// Retrieve the next number. Returns an array with value and the next randomizer.
//
// Example:
//
//   [val, randomizer] = next(randomizer);
//
export function next(randomizer: Randomizer): [ShapeType, Randomizer] {
  const [head, ...tail] = randomizer;

  if (tail.length > 0) {
    return [head, tail];
  }

  return [head, create()];
}
