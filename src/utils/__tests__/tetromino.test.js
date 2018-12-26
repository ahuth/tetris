import shapes from '../shapes';
import * as Point from '../point';
import * as Tetromino from '../tetromino';

const origin = Point.create(0, 0);

test('rotate', () => {
  let piece = Tetromino.create('L', origin);
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
