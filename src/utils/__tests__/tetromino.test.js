import * as Tetromino from '../tetromino';

test('rotating', () => {
  let piece = Tetromino.create('L', 0, 0);
  expect(piece.orientation).toEqual(0);
  piece = Tetromino.rotate(piece);
  expect(piece.orientation).toEqual(1);
  piece = Tetromino.rotate(piece);
  expect(piece.orientation).toEqual(2); 
  piece = Tetromino.rotate(piece);
  expect(piece.orientation).toEqual(3);
  piece = Tetromino.rotate(piece);
  expect(piece.orientation).toEqual(0);
});
