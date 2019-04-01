import { shapes, ShapeType, ShapeOrientation } from '../shapes';
import * as Tetromino from '../tetromino';

test('rotate', () => {
  const expectedShape = shapes[ShapeType.L];

  let piece = Tetromino.create(ShapeType.L);
  expect(Tetromino.getShape(piece)).toEqual(expectedShape[ShapeOrientation.Up]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(expectedShape[ShapeOrientation.Right]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(expectedShape[ShapeOrientation.Down]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(expectedShape[ShapeOrientation.Left]);

  piece = Tetromino.rotate(piece);
  expect(Tetromino.getShape(piece)).toEqual(expectedShape[ShapeOrientation.Up]);
});
