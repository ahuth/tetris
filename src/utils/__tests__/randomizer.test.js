import * as Randomizer from '../randomizer';

const pieceValues = ['L', 'I', 'T', 'S', 'Z', 'O', 'J'];

test('create', () => {
  expect(new Set(Randomizer.create())).toEqual(new Set(pieceValues));
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
