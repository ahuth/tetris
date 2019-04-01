import React, { useEffect } from 'react';
import Piece from './Piece';
import { ShapeType } from '../utils/shapes';
import * as Tetromino from '../utils/tetromino';

export default function App() {
  const [tetromino, setTetromino] = React.useState(Tetromino.create(ShapeType.Z));

  useEffect(() => {
    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === 'ArrowUp') {
        setTetromino(Tetromino.rotate(tetromino));
      }
    }

    document.addEventListener('keyup', handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp);
  });

  return (
    <Piece tetromino={tetromino} />
  );
}
