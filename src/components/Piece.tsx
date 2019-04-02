import React from 'react';
import Block from './Block';
import { getShape, Tetromino } from '../utils/tetromino';
import { Point } from '../utils/point';

type Props = {
  position: Point,
  tetromino: Tetromino,
}

export default function Piece({ position, tetromino }: Props) {
  const shape = getShape(tetromino);
  const containerStyles = React.useMemo(() => getContainerStyling(position), [position.x, position.y]);

  return (
    <div style={containerStyles}>
      {shape.map((row, i) => {
        return (
          <div key={i} style={styles.row}>
            {row.map((block, i) => {
              if (block === 0) {
                return <Block color="black" key={i} />;
              }
              return <Block color="limegreen" key={i} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

function getContainerStyling(position: Point) {
  return {
    position: 'absolute' as 'absolute',
    top: position.y * 20,
    left: position.x * 20,
  };
}

const styles = {
  row: {
    height: 20,
  },
};
