import React from 'react';
import MainBoard from './MainBoard';
import ScoreBoard from './ScoreBoard';
import useKeyHandler from '../hooks/useKeyHandler';
import useInterval from '../hooks/useInterval';
import { ActionTypes, State } from '../reducer';

type Props = {
  dispatch: React.Dispatch<ActionTypes>,
  state: State,
}

export default function Playing({ dispatch, state }: Props) {
  useKeyHandler('ArrowUp', () => dispatch(ActionTypes.Rotate));
  useKeyHandler('ArrowDown', () => dispatch(ActionTypes.MoveDown));
  useKeyHandler('ArrowLeft', () => dispatch(ActionTypes.MoveLeft));
  useKeyHandler('ArrowRight', () => dispatch(ActionTypes.MoveRight));
  useKeyHandler(' ', () => dispatch(ActionTypes.Stop));
  useInterval(state.interval, () => dispatch(ActionTypes.Tick));

  return (
    <div style={styles.container}>
      <MainBoard board={state.board} current={state.current} position={state.position} />
      <ScoreBoard level={state.level} next={state.next} score={state.score}>
        <button onClick={() => dispatch(ActionTypes.Stop)}>Pause</button>
      </ScoreBoard>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};
