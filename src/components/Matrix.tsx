import React, { useMemo } from 'react';
import Block from './Block';
import * as Board from '../utils/board';
import { Type as Point } from '../utils/point';
import { Type as Tetromino } from '../utils/tetromino';

type Props = {
  board: Board.Type,
  colors: { [index: string]: string },
  current: Tetromino,
  height: number,
  position: Point,
  width: number,
}

export default function Matrix({
  board,
  colors,
  current,
  height,
  position,
  width,
}: Props) {
  const styles = useMemo(() => getStyles(board.columns, height, width), [board.columns, height, width]);
  const boardWithTetromino = Board.commitTetrominoToBoard(board, current, position, 2);

  return (
    <div style={styles}>
      {Board.map(boardWithTetromino, (fill: number, i: number) => {
        return <Block color={colors[fill]} key={`${i}-${fill}`} />;
      })}
    </div>
  );
}

function getStyles(columns: number, height: number, width: number) {
  return {
    borderBottom: '1px solid grey',
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    height: height,
    width: width,
  };
}
