import { fill } from 'lodash';
import * as Point from './utils/point';
import * as Randomizer from './utils/randomizer';
import * as Tetromino from './utils/tetromino';

const [firstShape, randomizer] = Randomizer.next(Randomizer.create());

export const initialState = {
  current: Tetromino.create(firstShape),
  filled: fill(new Array(200), 0, 0),
  level: 1,
  paused: true,
  position: Point.create(3, 0),
  randomizer: randomizer,
  score: 0,
}

export const ActionTypes = {
  MoveLeft: 'left',
  MoveRight: 'right',
  Rotate: 'rotate',
};

export default function reducer(state, action) {
  switch (action) {
    case ActionTypes.MoveLeft:
      return {
        ...state,
        position: Point.create(state.position.x - 1, state.position.y),
      };
    case ActionTypes.MoveRight:
      return {
        ...state,
        position: Point.create(state.position.x + 1, state.position.y),
      };
    case ActionTypes.Rotate:
      return {
        ...state,
        current: Tetromino.rotate(state.current),
      };
    default:
      return state;
  }
}
