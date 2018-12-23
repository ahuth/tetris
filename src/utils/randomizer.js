import { range, shuffle } from 'lodash';

export function create() {
  return shuffle(range(7));
}

export function peek(randomizer) {
  return randomizer[0];
}

export function next(randomizer) {
  const [head, ...tail] = randomizer;
  return [head, tail.length > 0 ? tail : create()];
}
