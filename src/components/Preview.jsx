import React from 'react';
import Matrix from './Matrix';
import * as Board from '../utils/board';
import * as Point from '../utils/point';

const board = Board.create(5, 5);
const position = Point.create(1, 1);

export default function Preview({ next }) {
  return (
    <Matrix
      board={board}
      current={next}
      height={100}
      position={position}
      width={100}
    />
  );
}
