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
    brickLayout: string[];
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
    brickLayout: string[];
  };
  player: string;
  scores: number;
  status: keyof 'New Game' | 'Playing' | 'Paused';
  movePaddle: (mouseX: number) => void;
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
| PauseAction
| ShuffleAction
| RepeatAction
| MovePaddleAction;

export enum TypeKeys {
  MOVE_PADDLE = 'canvas::MOVE_PADDLE',
  PLAY = 'canvas::PLAY',
  PAUSE = 'canvas::PAUSE',
  SHUFFLE = 'canvas::SHUFFLE',
  REPEAT = 'canvas::REPEAT',
}

export interface PlayAction {
  type: TypeKeys.PLAY;
  songPosition: number;
}

export interface PauseAction {
  type: TypeKeys.PAUSE;
}

export interface ShuffleAction {
  type: TypeKeys.SHUFFLE;
  isShuffling: boolean;
}

export interface RepeatAction {
  type: TypeKeys.REPEAT;
  isRepeating: boolean;
}

export interface MovePaddleAction {
  type: TypeKeys.MOVE_PADDLE;
  mouseX: number;
}
