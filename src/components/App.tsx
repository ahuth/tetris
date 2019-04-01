import React from 'react';
import Piece from './Piece';
import { ShapeType } from '../utils/shapes';
import * as Tetromino from '../utils/tetromino';

export default function App() {
  const tetromino = Tetromino.create(ShapeType.Z);

  return (
    <Piece tetromino={tetromino} />
  );
}
