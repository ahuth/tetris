import React from 'react';
import Matrix from './Matrix';
import ScoreBoard from './ScoreBoard';
import useKeyHandler from '../hooks/useKeyHandler';
import useInterval from '../hooks/useInterval';
import reducer, { initialState, ActionTypes } from '../reducer';

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useKeyHandler('ArrowUp', () => dispatch(ActionTypes.Rotate));
  useKeyHandler('ArrowDown', () => dispatch(ActionTypes.MoveDown));
  useKeyHandler('ArrowLeft', () => dispatch(ActionTypes.MoveLeft));
  useKeyHandler('ArrowRight', () => dispatch(ActionTypes.MoveRight));

  useInterval(state.interval, () => dispatch(ActionTypes.Tick));

  return (
    <div style={styles.container}>
      <Matrix board={state.board} columns={10} current={state.current} height={400} position={state.position} width={200} />
      <ScoreBoard level={state.level} next={state.next} score={state.score} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};
