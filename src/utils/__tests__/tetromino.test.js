import * as Tetromino from '../tetromino';

test('rotate', () => {
  let piece = Tetromino.create(Tetromino.ShapeType.L);
  expect(Tetromino.getShape(piece)).toEqual([
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual([
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual([
    [0, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
  ]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual([
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual([
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ]);
});
