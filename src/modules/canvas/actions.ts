import { Dispatch } from 'redux';
import {
  MovePaddleAction,
  PlayAction,
  SetBrickCoordinatesAction,
  ChangeBrickStatusAction,
  IncreaseScoreAction,
  TypeKeys,
} from './types';

export const play = () => (dispatch: Dispatch<PlayAction>) => {
  dispatch({ type: TypeKeys.PLAY });
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
  dispatch({ type: TypeKeys.MOVE_PADDLE, mouseX });
};