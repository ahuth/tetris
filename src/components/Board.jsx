import React from 'react';
import Piece from './Piece';

export default function Board({ current, position }) {
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
    position: 'relative',
    width: 200,
  },
};
