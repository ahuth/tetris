import React from 'react';
import Block from './Block';
import * as Board from '../utils/board';

export default function Matrix({ board, current, position }) {
  const boardWithTetromino = Board.mapTetrominoToBoard(board, current, position, 2);

  return (
    <div style={styles.container}>
      {boardWithTetromino.map((fill, i) => {
        return <Block color={colors[fill]} key={`${i}-${fill}`} />
      })}
    </div>
  );
}

const styles = {
  container: {
    borderBottom: '1px solid grey',
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    height: 400,
    width: 200,
  },
};

const colors = {
  0: 'black',
  1: 'dodgerblue',
  2: 'limegreen',
};
