import React from 'react';
import Preview from './Preview';
import { Type as Tetromino } from '../tetromino';

type Props = {
  children?: React.ReactNode,
  level: number,
  next: Tetromino,
  score: number,
}

export default function ScoreBoard({ children, level, next, score }: Props) {
  return (
    <div>
      <Preview next={next} />
      <div>Level: {level}</div>
      <div>Score: {score}</div>
      <div>
        {children}
      </div>
    </div>
  );
}
