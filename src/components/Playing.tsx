import React, { useCallback } from 'react';
import MainBoard from './MainBoard';
import ScoreBoard from './ScoreBoard';
import useKeyHandler from '../hooks/useKeyHandler';
import useInterval from '../hooks/useInterval';
import { ActionTypes } from '../reducer';
import { Type as Game } from '../game';

type Props = {
  dispatch: React.Dispatch<ActionTypes>,
  state: Game,
}

export default function Playing({ dispatch, state }: Props) {
  const dispatchRotate = useCallback(() => dispatch(ActionTypes.Rotate), [dispatch]);
  const dispatchDown = useCallback(() => dispatch(ActionTypes.MoveDown), [dispatch]);
  const dispatchLeft = useCallback(() => dispatch(ActionTypes.MoveLeft), [dispatch]);
  const dispatchRight = useCallback(() => dispatch(ActionTypes.MoveRight), [dispatch]);
  const dispatchTick = useCallback(() => dispatch(ActionTypes.Tick), [dispatch]);

  useKeyHandler('ArrowUp', dispatchRotate);
  useKeyHandler('ArrowDown', dispatchDown);
  useKeyHandler('ArrowLeft', dispatchLeft);
  useKeyHandler('ArrowRight', dispatchRight);

  useInterval(dispatchTick, intervalFromLevel(state.level));

  return (
    <div style={styles.container}>
      <MainBoard board={state.board} current={state.current} position={state.position} />
      <ScoreBoard level={state.level} next={state.next} score={state.score} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};

function intervalFromLevel(level: number) {
  switch (level) {
    case 0: return 750;
    case 1: return 650;
    case 2: return 550;
    case 3: return 450;
    case 4: return 350;
    case 5: return 250;
    default: return 150;
  }
}
