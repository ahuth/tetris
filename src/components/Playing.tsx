import React, { useCallback } from 'react';
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
  const dispatchRotate = useCallback(() => dispatch(ActionTypes.Rotate), [dispatch]);
  const dispatchDown = useCallback(() => dispatch(ActionTypes.MoveDown), [dispatch]);
  const dispatchLeft = useCallback(() => dispatch(ActionTypes.MoveLeft), [dispatch]);
  const dispatchRight = useCallback(() => dispatch(ActionTypes.MoveRight), [dispatch]);
  const dispatchStop = useCallback(() => dispatch(ActionTypes.Stop), [dispatch]);
  const dispatchTick = useCallback(() => dispatch(ActionTypes.Tick), [dispatch]);

  useKeyHandler('ArrowUp', dispatchRotate);
  useKeyHandler('ArrowDown', dispatchDown);
  useKeyHandler('ArrowLeft', dispatchLeft);
  useKeyHandler('ArrowRight', dispatchRight);
  useKeyHandler(' ', dispatchStop);
  useInterval(state.interval, dispatchTick);

  return (
    <div style={styles.container}>
      <MainBoard board={state.board} current={state.current} position={state.position} />
      <ScoreBoard level={state.level} next={state.next} score={state.score}>
        <button onClick={dispatchStop}>Pause</button>
      </ScoreBoard>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};
