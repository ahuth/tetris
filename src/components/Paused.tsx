import React from 'react';
import MainBoard from './MainBoard';
import ScoreBoard from './ScoreBoard';
import { ActionTypes, State } from '../reducer';

type Props = {
  dispatch: React.Dispatch<ActionTypes>,
  state: State,
}

export default function Paused({ dispatch, state }: Props) {
  return (
    <div style={styles.container}>
      <MainBoard board={state.board} current={state.current} position={state.position}>
        <span style={styles.text}>Paused</span>
      </MainBoard>
      <ScoreBoard level={state.level} next={state.next} score={state.score}>
        <button onClick={() => dispatch(ActionTypes.Start)}>Start</button>
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
