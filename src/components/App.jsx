import React from 'react';
import Matrix from './Matrix';
import ScoreBoard from './ScoreBoard';
import useKeyHandler from '../hooks/useKeyHandler';
import reducer, { initialState, ActionTypes } from '../reducer';

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useKeyHandler('ArrowUp', () => dispatch(ActionTypes.Rotate));
  useKeyHandler('ArrowLeft', () => dispatch(ActionTypes.Left));
  useKeyHandler('ArrowRight', () => dispatch(ActionTypes.Right));

  return (
    <React.Fragment>
      <Matrix current={state.current} position={state.position} />
      <ScoreBoard level={state.level} score={state.score} />
    </React.Fragment>
  );
}
