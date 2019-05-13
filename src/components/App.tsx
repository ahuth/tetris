import React, { useReducer } from 'react';
import Lost from './Lost';
import Playing from './Playing';
import reducer from '../reducer';
import * as Game from '../utils/game';

const initialState = Game.create();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  switch (state.state) {
    case Game.StateTypes.Lost:
      return <Lost dispatch={dispatch} state={state} />;
    case Game.StateTypes.Playing:
      return <Playing dispatch={dispatch} state={state} />
    default:
      return null;
  }
}
