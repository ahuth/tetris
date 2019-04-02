import React from 'react';
import Piece from './Piece';
import useKeyHandler from '../hooks/useKeyHandler';
import * as Tetromino from '../utils/tetromino';

const initialTetromino = Tetromino.create(Tetromino.ShapeType.Z);

export default function App() {
  const [tetromino, setTetromino] = React.useState(initialTetromino);

  useKeyHandler('ArrowUp', () => {
    setTetromino(current => Tetromino.rotate(current));
  });

  return (
    <Piece tetromino={tetromino} />
  );
}
