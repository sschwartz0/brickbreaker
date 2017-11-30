// import { Dispatch } from 'redux';

export interface InitialState {
  currentGame: {
    level: number;
    score: number;
    lives: number;
    mouseX: number;
  };
  currentLevel: {
    totalBricks: number;
    bricksLeft: number;
    brickWidth: number;
    brickHeight: number;
    brickPadding: number;
    brickOffsetTop: number;
    brickOffsetLeft: number;
    brickLayout: Object[][];
  };
  player: string;
  scores: number;
  status: keyof 'New Game' | 'Playing' | 'Paused';
}

export interface LogicContainerProps {
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
  status: keyof 'New Game' | 'Playing' | 'Paused';
  changeBrickStatus: (row: number, column: number) => void;
  movePaddle: (mouseX: number) => void;
  increaseScore: () => void;
  setBrickCoordinates: (row: number, column: number, x: number, y: number) => void;
}

export interface MusicPlayerProps {
//   currentSong: CurrentSong;
//   currentTime: string;
  
}


//
// ACTIONS
//

export type ActionTypes =
| PlayAction
| SetBrickCoordinatesAction
| IncreaseScoreAction
| ChangeBrickStatusAction
| MovePaddleAction;

export enum TypeKeys {
  MOVE_PADDLE = 'canvas::MOVE_PADDLE',
  PLAY = 'canvas::PLAY',
  SET_BRICK_COORDINATES = 'canvas::SET_BRICK_COORDINATES',
  INCREASE_SCORE = 'canvas::INCREASE_SCORE',
  CHANGE_BRICK_STATUS = 'canvas::CHANGE_BRICK_STATUS',
}

export interface PlayAction {
  type: TypeKeys.PLAY;
  songPosition: number;
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
