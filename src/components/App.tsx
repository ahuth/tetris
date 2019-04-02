import React from 'react';
import Piece from './Piece';
import * as Tetromino from '../utils/tetromino';

export default function App() {
  const [tetromino, setTetromino] = React.useState(Tetromino.create(Tetromino.ShapeType.Z));

  React.useEffect(() => {
    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === 'ArrowUp') {
        setTetromino(current => Tetromino.rotate(current));
      }
    }

    document.addEventListener('keyup', handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <Piece tetromino={tetromino} />
  );
}
