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
  const [position, setPosition] = React.useState(initialPosition);
  const [tetromino, setTetromino] = React.useState(initialTetromino);

  useKeyHandler('ArrowUp', () => setTetromino(prev => Tetromino.rotate(prev)));
  useKeyHandler('ArrowLeft', () => setPosition(prev => Point.create(prev.x - 1, prev.y)));
  useKeyHandler('ArrowRight', () => setPosition(prev => Point.create(prev.x + 1, prev.y)));

  return (
    <Board current={tetromino} position={position} />
  );
}
