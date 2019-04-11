import React from 'react';
import Block from './Block';
import * as Board from '../utils/board';
import * as Point from '../utils/point';

const board = Board.create(5, 5);
const position = Point.create(1, 1);

export default function Preview({ next }) {
  const boardWithTetromino = Board.commitTetrominoToBoard(board, next, position, 1, 5);

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
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    height: 100,
    width: 100,
  },
};

const colors = {
  0: 'black',
  1: 'yellow',
};
