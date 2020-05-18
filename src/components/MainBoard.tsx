import React from 'react';
import Matrix from './Matrix';
import { Type as Board } from '../board';
import { Type as Point } from '../point';
import { Type as Tetromino } from '../tetromino';

type Props = {
  board: Board,
  children?: React.ReactNode,
  current: Tetromino,
  position: Point,
}

export default function MainBoard({ board, children, current, position }: Props) {
  return (
    <div style={styles.container}>
      <Matrix
        board={board}
        colors={colors}
        current={current}
        height={400}
        position={position}
        width={200}
      />
      {children}
    </div>
  );
}

const colors = {
  0: 'black',
  1: 'dodgerblue',
  2: 'limegreen',
};

const styles = {
  container: {
    position: 'relative' as const,
  },
};
