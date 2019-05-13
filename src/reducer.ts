import * as Game from './utils/game';

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

export const initialState = Game.create();

export type State = typeof initialState;

export default function reducer(state: State, action: ActionTypes) {
  switch (action) {
    case ActionTypes.Tick:
    case ActionTypes.MoveDown:
      return Game.moveDown(state);
    case ActionTypes.MoveLeft:
      return Game.moveLeft(state);
    case ActionTypes.MoveRight:
      return Game.moveRight(state);
    case ActionTypes.Reset:
      return Game.create();
    case ActionTypes.Rotate:
      return Game.rotate(state);
    default:
      return state;
  }
}
