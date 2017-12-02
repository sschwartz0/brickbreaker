// import { Dispatch } from 'redux';

export interface InitialState {
  brickColors: {
    [index: number]: string;
  }
  currentGame: {
    level: number;
    score: number;
    lives: number;
    mouseX: number;
  };
  currentLevel: {
    totalBricks: number;
    bricksLeft: number;
    brickWidth: number
    brickHeight: number
    brickPadding: number
    brickOffsetTop: number
    brickOffsetLeft: number
    brickLayout: Object[][];
  };
  player: string;
  scores: number;
  status: 'READY' | 'NEW_GAME' | 'PLAYING' | 'PAUSED' | 'GAME_OVER';
}

export interface DisplayContainerProps {
  brickColors: {
    [index: number]: string;
  },
  currentGame: {
    level: number;
    score: number;
    lives: number;
    mouseX: number;
  };
  currentLevel: {
    totalBricks: number;
    bricksLeft: number;
    brickLayout: Object[][];
  };
  player: string;
  scores: number;
  status: 'READY' | 'NEW_GAME' | 'PLAYING' | 'PAUSED' | 'GAME_OVER';
  changeBrickLayout: (row: number, column: number) => void;
  changeBrickStatus: (row: number, column: number) => void;
  changeGameStatus: (status: string) => void;
  lostALife: () => void;
  movePaddle: (mouseX: number) => void;
  increaseScore: () => void;
  setBrickCoordinates: (row: number, column: number, x: number, y: number) => void;
}

//
// ACTIONS
//

export type ActionTypes =
| ChangeGameStatusAction
| SetBrickCoordinatesAction
| IncreaseScoreAction
| ChangeBrickStatusAction
| MovePaddleAction
| LostALifeAction
| ChangeBrickLayoutAction;

export enum TypeKeys {
  MOVE_PADDLE = 'canvas::MOVE_PADDLE',
  CHANGE_GAME_STATUS = 'canvas::CHANGE_GAME_STATUS',
  SET_BRICK_COORDINATES = 'canvas::SET_BRICK_COORDINATES',
  INCREASE_SCORE = 'canvas::INCREASE_SCORE',
  CHANGE_BRICK_STATUS = 'canvas::CHANGE_BRICK_STATUS',
  LOST_A_LIFE = 'canvas::LOST_A_LIFE',
  CHANGE_BRICK_LAYOUT = 'canvas::CHANGE_BRICK_LAYOUT',
}

export interface ChangeGameStatusAction {
  type: TypeKeys.CHANGE_GAME_STATUS;
  status: string;
}

export interface SetBrickCoordinatesAction {
  type: TypeKeys.SET_BRICK_COORDINATES;
  row: number;
  column: number;
  x: number;
  y: number;
}

export interface IncreaseScoreAction {
  type: TypeKeys.INCREASE_SCORE;
  score: number;
}

export interface ChangeBrickStatusAction {
  type: TypeKeys.CHANGE_BRICK_STATUS;
  row: number;
  column: number;
}

export interface MovePaddleAction {
  type: TypeKeys.MOVE_PADDLE;
  mouseX: number;
}

export interface LostALifeAction {
  type: TypeKeys.LOST_A_LIFE;
}

export interface ChangeBrickLayoutAction {
  type: TypeKeys.CHANGE_BRICK_LAYOUT;
  row: number;
  column: number;
  status: number,
}
