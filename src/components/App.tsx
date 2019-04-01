import React from 'react';
import Piece from './Piece';
import * as Tetromino from '../utils/tetromino';

const initialPiece = Tetromino.create(Tetromino.ShapeType.Z);

function reducer(state: Tetromino.Tetromino, action: { type: string }) {
  switch (action.type) {
    case 'rotate':
      return Tetromino.rotate(state);
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialPiece);

  function handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      dispatch({ type: 'rotate' });
    }
  }

  React.useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <Piece tetromino={state} />
  );
}
