import { range, shuffle } from 'lodash';

export function create() {
  return shuffle(range(7));
}

export function peek(randomizer) {
  return randomizer[0];
}

export function next(randomizer) {
  const [head, ...tail] = randomizer;

  if (tail.length > 0) {
    return [head, tail];
  }

  return [head, create()];
}
