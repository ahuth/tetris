import React from 'react';
import Matrix from './Matrix';
import * as Board from '../board';
import * as Point from '../point';
import { Type as Tetromino } from '../tetromino';

const board = Board.create(5, 5);
const position = Point.create(1, 1);

type Props = {
  next: Tetromino,
}

export default function Preview({ next }: Props) {
  return (
    <Matrix
      board={board}
      colors={colors}
      current={next}
      height={100}
      position={position}
      width={100}
    />
  );
}

const colors = {
  0: 'black',
  1: 'dodgerblue',
  2: 'yellow',
};
