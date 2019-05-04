import React from 'react';
import MainBoard from './MainBoard';
import ScoreBoard from './ScoreBoard';
import { ActionTypes } from '../reducer';

export default function Paused({ dispatch, state }) {
  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        <MainBoard board={state.board} current={state.current} position={state.position} />
        <span style={styles.text}>Paused</span>
      </div>
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
  inner: {
    position: 'relative',
  },
  text: {
    backgroundColor: 'white',
    color: 'black',
    display: 'block',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    width: '100%',
  },
};
