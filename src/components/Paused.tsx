import React, { useCallback } from 'react';
import MainBoard from './MainBoard';
import ScoreBoard from './ScoreBoard';
import useKeyHandler from '../hooks/useKeyHandler';
import { ActionTypes, State } from '../reducer';

type Props = {
  dispatch: React.Dispatch<ActionTypes>,
  state: State,
}

export default function Paused({ dispatch, state }: Props) {
  const dispatchStart = useCallback(() => dispatch(ActionTypes.Start), [dispatch]);
  const dispatchReset = useCallback(() => dispatch(ActionTypes.Reset), [dispatch]);
  useKeyHandler(' ', dispatchStart);

  return (
    <div style={styles.container}>
      <MainBoard board={state.board} current={state.current} position={state.position}>
        <span style={styles.text}>Paused</span>
      </MainBoard>
      <ScoreBoard level={state.level} next={state.next} score={state.score}>
        <button onClick={dispatchStart}>Start</button>
        <button onClick={dispatchReset}>Reset</button>
      </ScoreBoard>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: 'black',
    display: 'block',
    position: 'absolute' as 'absolute',
    textAlign: 'center' as 'center',
    top: '50%',
    width: '100%',
  },
};
