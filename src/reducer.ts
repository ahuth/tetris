import * as Board from './utils/board';
import * as Point from './utils/point';
import * as Randomizer from './utils/randomizer';
import * as Tetromino from './utils/tetromino';

export enum StateTypes {
  Playing,
  Won,
  Lost,
};

export enum ActionTypes {
  MoveDown = 'down',
  MoveLeft = 'left',
  MoveRight = 'right',
  Reset = 'reset',
  Rotate = 'rotate',
  Start = 'start',
  Stop = 'stop',
  Tick = 'tick',
};

function createInitialState() {
  const [firstShape, firstRandomizer] = Randomizer.next(Randomizer.create());
  const [secondShape, randomizer] = Randomizer.next(firstRandomizer);

  return {
    board: Board.create(20, 10),
    current: Tetromino.create(firstShape),
    interval: 750,
    level: 1,
    next: Tetromino.create(secondShape),
    position: Point.create(3, 0),
    randomizer: randomizer,
    score: 0,
    state: StateTypes.Playing,
  };
}

export const initialState = createInitialState();

export type State = typeof initialState;

export default function reducer(state: State, action: ActionTypes) {
  switch (action) {
    case ActionTypes.Tick:
    case ActionTypes.MoveDown: {
      const [board, current, next, position, randomizer, nextState] = Board.moveDown(
        state.board,
        state.current,
        state.next,
        state.position,
        state.randomizer,
        state.state,
      );

      return {
        ...state,
        board,
        current,
        next,
        position,
        state: nextState,
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
    case ActionTypes.Reset:
      return createInitialState();
    case ActionTypes.Rotate:
      return {
        ...state,
        current: Board.rotate(state.board, state.current, state.position),
      };
    case ActionTypes.Start:
      return {
        ...state,
        state: StateTypes.Playing,
      };
    default:
      return state;
  }
}
