import React, { useReducer } from 'react';
import Lost from './Lost';
import Playing from './Playing';
import reducer, { initialState, StateTypes } from '../reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  switch (state.state) {
    case StateTypes.Lost:
      return <Lost dispatch={dispatch} state={state} />;
    case StateTypes.Playing:
      return <Playing dispatch={dispatch} state={state} />
    default:
      return null;
  }
}
