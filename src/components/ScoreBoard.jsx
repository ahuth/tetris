import React from 'react';

export default function ScoreBoard({ level, score }) {
  return (
    <div>
      <div>Level: {level}</div>
      <div>Score: {score}</div>
    </div>
  );
}
