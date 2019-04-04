import React from 'react';
import Matrix from './Matrix';
import ScoreBoard from './ScoreBoard';
import useKeyHandler from '../hooks/useKeyHandler';
import reducer, { initialState, ActionTypes } from '../reducer';

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useKeyHandler('ArrowUp', () => dispatch(ActionTypes.Rotate));
  useKeyHandler('ArrowLeft', () => dispatch(ActionTypes.MoveLeft));
  useKeyHandler('ArrowRight', () => dispatch(ActionTypes.MoveRight));

  return (
    <div style={styles.container}>
      <Matrix current={state.current} position={state.position} />
      <ScoreBoard level={state.level} score={state.score} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};
