import { shapes, ShapeType, ShapeOrientation } from '../shapes';
import * as Tetromino from '../tetromino';

test('rotate', () => {
  let piece = Tetromino.create(ShapeType.L);
  expect(Tetromino.getShape(piece)).toEqual(shapes.L[ShapeOrientation.Up]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(shapes.L[ShapeOrientation.Right]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(shapes.L[ShapeOrientation.Down]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(shapes.L[ShapeOrientation.Left]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(shapes.L[ShapeOrientation.Up]);
});
