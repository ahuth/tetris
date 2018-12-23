import * as Randomizer from '../randomizer';

const pieceValues = [0, 1, 2, 3, 4, 5, 6];

test('creating', () => {
  expect(new Set(Randomizer.create())).toEqual(new Set(pieceValues));
});

test('peeking', () => {
  const randomizer = Randomizer.create();
  expect(pieceValues).toContain(Randomizer.peek(randomizer));
});

test('next', () => {
  const previous = [];
  let next;
  let randomizer;
  randomizer = Randomizer.create();

  // Select first piece.
  [next, randomizer] = Randomizer.next(randomizer);
  expect(pieceValues).toContain(next);
  expect(previous).not.toContain(next);
  previous.push(next);

  // Select second piece.
  [next, randomizer] = Randomizer.next(randomizer);
  expect(pieceValues).toContain(next);
  expect(previous).not.toContain(next);
  previous.push(next);

  // Select third piece.
  [next, randomizer] = Randomizer.next(randomizer);
  expect(pieceValues).toContain(next);
  expect(previous).not.toContain(next);
  previous.push(next);

  // Select fourth piece.
  [next, randomizer] = Randomizer.next(randomizer);
  expect(pieceValues).toContain(next);
  expect(previous).not.toContain(next);
  previous.push(next);

  // Select fifth piece.
  [next, randomizer] = Randomizer.next(randomizer);
  expect(pieceValues).toContain(next);
  expect(previous).not.toContain(next);
  previous.push(next);

  // Select sixth piece.
  [next, randomizer] = Randomizer.next(randomizer);
  expect(pieceValues).toContain(next);
  expect(previous).not.toContain(next);
  previous.push(next);

  // Select seventh piece.
  [next, randomizer] = Randomizer.next(randomizer);
  expect(pieceValues).toContain(next);
  expect(previous).not.toContain(next);
  previous.push(next);

  // All pieces have been selected. Start over.
  [next, randomizer] = Randomizer.next(randomizer);
  expect(pieceValues).toContain(next);
  expect(previous).toContain(next);
});
