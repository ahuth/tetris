import React from 'react';
import Matrix from './Matrix';

export default function MainBoard({ board, current, position }) {
  return (
    <Matrix
      board={board}
      columns={10}
      current={current}
      height={400}
      position={position}
      width={200}
    />
  );
}
