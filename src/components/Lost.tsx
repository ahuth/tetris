import React, { useCallback } from 'react';
import MainBoard from './MainBoard';
import ScoreBoard from './ScoreBoard';
import { ActionTypes, State } from '../reducer';

type Props = {
  dispatch: React.Dispatch<ActionTypes>,
  state: State,
}

export default function Lost({ dispatch, state }: Props) {
  const dispatchReset = useCallback(() => dispatch(ActionTypes.Reset), [dispatch]);

  return (
    <div style={styles.container}>
      <MainBoard board={state.board} current={state.current} position={state.position}>
        <span style={styles.text}>You lost!</span>
      </MainBoard>
      <ScoreBoard level={state.level} next={state.next} score={state.score}>
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
