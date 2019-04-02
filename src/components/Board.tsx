import React from 'react';
import Piece from './Piece';
import { Point } from '../utils/point';
import { Tetromino } from '../utils/tetromino';

type Props = {
  current: Tetromino,
  position: Point
}

export default function Board({ current, position }: Props) {
  return (
    <div style={styles.container}>
      <Piece position={position} tetromino={current} />
    </div>
  );
}

const styles = {
  container: {
    boxShadow: '0 8px 6px -6px grey',
    height: 400,
    position: 'relative' as 'relative',
    width: 200,
  },
};
