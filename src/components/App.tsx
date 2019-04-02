import React from 'react';
import Piece from './Piece';
import useKeyHandler from '../hooks/useKeyHandler';
import * as Tetromino from '../utils/tetromino';

export default function App() {
  const [tetromino, setTetromino] = React.useState(Tetromino.create(Tetromino.ShapeType.Z));

  useKeyHandler('ArrowUp', () => {
    setTetromino(current => Tetromino.rotate(current));
  });

  return (
    <Piece tetromino={tetromino} />
  );
}
