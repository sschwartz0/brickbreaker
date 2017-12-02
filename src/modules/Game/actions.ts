import { Dispatch } from 'redux';
import {
  MovePaddleAction,
  ChangeGameStatusAction,
  SetBrickCoordinatesAction,
  ChangeBrickStatusAction,
  IncreaseScoreAction,
  LostALifeAction,
  TypeKeys,
  ChangeBrickLayoutAction,
} from './types';

export const changeGameStatus = (status: string) => (dispatch: Dispatch<ChangeGameStatusAction>) => {
  dispatch({ 
    type: TypeKeys.CHANGE_GAME_STATUS,
    status,
   });
};

export const setBrickCoordinates = (row: number, column: number, x: number, y: number) => (dispatch: Dispatch<SetBrickCoordinatesAction>) => {
  dispatch({ 
    type: TypeKeys.SET_BRICK_COORDINATES,
    row,
    column,
    x,
    y,
   });
};

export const changeBrickStatus = (row: number, column: number) => (dispatch: Dispatch<ChangeBrickStatusAction>) => {
  dispatch({ 
    type: TypeKeys.CHANGE_BRICK_STATUS, 
    row, 
    column,
  });
};

export const increaseScore = () => (dispatch: Dispatch<IncreaseScoreAction>, getState: any) => {
  const state = getState();
  const {
    currentGame: {
      score
    }
  } = state;
  
  dispatch({ 
    type: TypeKeys.INCREASE_SCORE, 
    score: score + 10,
  });
};

export const movePaddle = (mouseX: number) => (dispatch: Dispatch<MovePaddleAction>) => {
  dispatch({ 
    type: TypeKeys.MOVE_PADDLE, 
    mouseX,
  });
};

export const lostALife = () => (dispatch: Dispatch<LostALifeAction>) => {
  dispatch({ type: TypeKeys.LOST_A_LIFE });
};

export const changeBrickLayout = (row: number, column: number, status: number) => (dispatch: Dispatch<ChangeBrickLayoutAction>) => {
  dispatch({ 
    type: TypeKeys.CHANGE_BRICK_LAYOUT,
    row,
    column,
    status,
  });
};