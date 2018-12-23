import shapes from '../shapes';
import * as Tetromino from '../tetromino';

test('rotate', () => {
  let piece = Tetromino.create('L', 0, 0);
  expect(Tetromino.getShape(piece)).toEqual(shapes.L[0]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(shapes.L[1]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(shapes.L[2]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(shapes.L[3]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(shapes.L[0]);
});
