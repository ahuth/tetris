import React from 'react';
import { getShape, Tetromino } from '../utils/tetromino';
import Block from './Block';

type Props = {
  tetromino: Tetromino,
}

export default function Piece({ tetromino }: Props) {
  const shape = getShape(tetromino);

  return (
    <div>
      {shape.map((row, i) => {
        return (
          <div key={i} style={styles}>
            {row.map((block, i) => {
              if (block === 0) {
                return <Block color="black" />;
              }
              return <Block color="limegreen" />;
            })}
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  height: 20,
};
