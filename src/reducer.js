import * as Board from './utils/board';
import * as Point from './utils/point';
import * as Randomizer from './utils/randomizer';
import * as Tetromino from './utils/tetromino';

const [firstShape, firstRandomizer] = Randomizer.next(Randomizer.create());
const [secondShape, randomizer] = Randomizer.next(firstRandomizer);

export const StateTypes = {
  Paused: 0,
  Playing: 1,
  Won: 2,
  Lost: 3,
};

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

export const initialState = {
  board: Board.create(20, 10),
  current: Tetromino.create(firstShape),
  interval: 750,
  level: 1,
  next: Tetromino.create(secondShape),
  position: Point.create(3, 0),
  randomizer: randomizer,
  score: 0,
  state: StateTypes.Paused,
}

export default function reducer(state, action) {
  switch (action) {
    case ActionTypes.Tick:
    case ActionTypes.MoveDown: {
      const [board, current, next, position, randomizer] = Board.moveDown(
        state.board,
        state.current,
        state.next,
        state.position,
        state.randomizer,
        10,
      );

      return {
        ...state,
        board,
        current,
        next,
        position,
        randomizer,
      };
     }
    case ActionTypes.MoveLeft:
      return {
        ...state,
        position: Board.moveLeft(state.board, state.current, state.position, 10),
      };
    case ActionTypes.MoveRight:
      return {
        ...state,
        position: Board.moveRight(state.board, state.current, state.position, 10),
      };
    case ActionTypes.Rotate:
      return {
        ...state,
        current: Board.rotate(state.board, state.current, state.position, 10),
      };
    default:
      return state;
  }
}
