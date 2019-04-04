import * as Point from './utils/point';
import * as Randomizer from './utils/randomizer';
import * as Tetromino from './utils/tetromino';

const [firstShape, randomizer] = Randomizer.next(Randomizer.create());

export const initialState = {
  current: Tetromino.create(firstShape),
  level: 1,
  position: Point.create(3, 0),
  randomizer: randomizer,
  score: 0,
}

export const ActionTypes = {
  Rotate: 'rotate',
  Right: 'right',
  Left: 'left',
};

export default function reducer(state, action) {
  switch (action) {
    case ActionTypes.Rotate:
      return {
        ...state,
        current: Tetromino.rotate(state.current),
      };
    case ActionTypes.Right:
      return {
        ...state,
        position: Point.create(state.position.x + 1, state.position.y),
      };
    case ActionTypes.Left:
      return {
        ...state,
        position: Point.create(state.position.x - 1, state.position.y),
      };
    default:
      return state;
  }
}
