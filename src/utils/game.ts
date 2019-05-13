import * as Board from './board';
import * as Point from './point';
import * as Randomizer from './randomizer';
import * as Tetromino from './tetromino';

export enum StateTypes {
  Playing,
  Won,
  Lost,
};

interface Game {
  board: Board.Type,
  current: Tetromino.Type,
  level: number,
  next: Tetromino.Type,
  position: Point.Type,
  randomizer: Randomizer.Type,
  score: number,
  state: StateTypes,
};

export type Type = Game;

export function create(): Game {
  const [firstShape, firstRandomizer] = Randomizer.next(Randomizer.create());
  const [secondShape, randomizer] = Randomizer.next(firstRandomizer);

  return {
    board: Board.create(20, 10),
    current: Tetromino.create(firstShape),
    level: 0,
    next: Tetromino.create(secondShape),
    position: Point.create(3, 0),
    randomizer: randomizer,
    score: 0,
    state: StateTypes.Playing,
  };
}

export function moveDown(game: Game): Game {
  const [board, current, level, next, position, randomizer, score, nextState] = Board.moveDown(
    game.board,
    game.current,
    game.level,
    game.next,
    game.position,
    game.randomizer,
    game.score,
    game.state,
  );

  return {
    ...game,
    board,
    current,
    level,
    next,
    position,
    randomizer,
    score,
    state: nextState,
  };
}

export function moveLeft(game: Game): Game {
  return {
    ...game,
    position: Board.moveLeft(game.board, game.current, game.position),
  };
}

export function moveRight(game: Game): Game {
  return {
    ...game,
    position: Board.moveRight(game.board, game.current, game.position),
  };
}

export function rotate(game: Game): Game {
  return {
    ...game,
    current: Board.rotate(game.board, game.current, game.position),
  };
}
