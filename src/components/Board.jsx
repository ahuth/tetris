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
    borderBottom: '1px solid grey',
    height: 400,
    position: 'relative',
    width: 200,
  },
};
