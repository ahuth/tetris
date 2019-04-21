import React from 'react';
import Matrix from './Matrix';

export default function MainBoard({ board, current, position }) {
  return (
    <Matrix
      board={board}
      colors={colors}
      current={current}
      height={400}
      position={position}
      width={200}
    />
  );
}

const colors = {
  0: 'black',
  1: 'dodgerblue',
  2: 'limegreen',
};
