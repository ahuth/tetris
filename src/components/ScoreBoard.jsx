import React from 'react';
import Preview from './Preview';

export default function ScoreBoard({ children, level, next, score }) {
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
