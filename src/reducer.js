import * as Board from './utils/board';
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
  board: Board.create(),
  current: Tetromino.create(firstShape),
  interval: 750,
  level: 1,
  position: Point.create(3, 0),
  randomizer: randomizer,
  score: 0,
  state: StateTypes.Paused,
}

export default function reducer(state, action) {
  switch (action) {
    case ActionTypes.MoveDown: {
      const [board, tetromino, position, randomizer] = Board.moveDown(state.board, state.current, state.position, state.randomizer);

      return {
        ...state,
        board,
        current: tetromino,
        position,
        randomizer,
      };
     }
    case ActionTypes.MoveLeft:
      return {
        ...state,
        position: Board.moveLeft(state.board, state.current, state.position),
      };
    case ActionTypes.MoveRight:
      return {
        ...state,
        position: Board.moveRight(state.board, state.current, state.position),
      };
    case ActionTypes.Rotate:
      return {
        ...state,
        current: Board.rotate(state.board, state.current, state.position),
      };
    default:
      return state;
  }
}
