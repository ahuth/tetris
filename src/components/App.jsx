import React from 'react';
import Paused from './Paused';
import Playing from './Playing';
import reducer, { initialState, StateTypes } from '../reducer';

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  switch (state.state) {
    case StateTypes.Paused:
      return <Paused dispatch={dispatch} state={state} />
    case StateTypes.Playing:
      return <Playing dispatch={dispatch} state={state} />
    default:
      return null;
  }
}
