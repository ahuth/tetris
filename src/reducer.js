import { fill } from 'lodash';
import * as Point from './utils/point';
import * as Randomizer from './utils/randomizer';
import * as Tetromino from './utils/tetromino';

const [firstShape, randomizer] = Randomizer.next(Randomizer.create());

export const StateTypes = {
  Paused: 0,
  Playing: 1,
  Won: 2,
  Lost: 3,
};

export const initialState = {
  current: Tetromino.create(firstShape),
  filled: fill(new Array(200), 0, 0),
  interval: 750,
  level: 1,
  position: Point.create(3, 0),
  randomizer: randomizer,
  score: 0,
  state: StateTypes.Paused,
}

export const ActionTypes = {
  MoveDown: 'down',
  MoveLeft: 'left',
  MoveRight: 'right',
  Reset: 'reset',
  Rotate: 'rotate',
  Start: 'start',
  Stop: 'stop',
  Tick: 'tick',
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
