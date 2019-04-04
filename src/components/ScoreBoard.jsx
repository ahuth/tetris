import React from 'react';

export default function ScoreBoard({ level, score }) {
  return (
    <div>
      <span>Level: {level}</span>
      <span>Score: {score}</span>
    </div>
  );
}
