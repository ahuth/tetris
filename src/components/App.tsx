import React from 'react';
import Board from './Board';
import useKeyHandler from '../hooks/useKeyHandler';
import * as Point from '../utils/point';
import * as Randomizer from '../utils/randomizer';
import * as Tetromino from '../utils/tetromino';

const randomizer = Randomizer.create();
const [firstShape] = Randomizer.next(randomizer);
const initialTetromino = Tetromino.create(firstShape);
const initialPosition = Point.create(3, 0);

export default function App() {
  const [tetromino, setTetromino] = React.useState(initialTetromino);

  useKeyHandler('ArrowUp', () => {
    setTetromino(current => Tetromino.rotate(current));
  });

  return (
    <Board current={tetromino} position={initialPosition} />
  );
}
