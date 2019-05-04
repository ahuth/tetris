import React from 'react';
import Matrix from './Matrix';

export default function MainBoard({ board, children, current, position }) {
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
    position: 'relative',
  },
};
