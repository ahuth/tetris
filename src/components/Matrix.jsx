import React from 'react';
import Block from './Block';
import * as Board from '../utils/board';

export default function Matrix({ board, columns, current, height, position, width }) {
  const styles = React.useMemo(() => getStyles(columns, height, width), [columns, height, width]);
  const boardWithTetromino = Board.commitTetrominoToBoard(board, current, position, 2, columns);

  return (
    <div style={styles}>
      {boardWithTetromino.map((fill, i) => {
        return <Block color={colors[fill]} key={`${i}-${fill}`} />
      })}
    </div>
  );
}

function getStyles(columns, height, width) {
  return {
    borderBottom: '1px solid grey',
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    height: height,
    width: width,
  };
}

const colors = {
  0: 'black',
  1: 'dodgerblue',
  2: 'limegreen',
};
