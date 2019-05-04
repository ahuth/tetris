import React from 'react';
import Playing from './Playing';
import reducer, { initialState } from '../reducer';

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Playing dispatch={dispatch} state={state} />
  );
}
