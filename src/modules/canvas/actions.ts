import { Dispatch } from 'redux';
import {
  MovePaddleAction,
  PlayAction,
  PauseAction,
  RepeatAction,
  ShuffleAction,
  TypeKeys,
} from './types';

export const play = () => (dispatch: Dispatch<PlayAction>) => {
  dispatch({ type: TypeKeys.PLAY });
};

export const pause = () => (dispatch: Dispatch<PauseAction>) => {
  dispatch({ type: TypeKeys.PAUSE });
};

export const repeat = (isRepeating: boolean) => (dispatch: Dispatch<RepeatAction>) => {
  dispatch({ type: TypeKeys.REPEAT, isRepeating });
};

export const shuffle = (isShuffling: boolean) => (dispatch: Dispatch<ShuffleAction>) => {
  dispatch({ type: TypeKeys.SHUFFLE, isShuffling });
};

export const movePaddle = (mouseX: number) => (dispatch: Dispatch<MovePaddleAction>) => {
  dispatch({ type: TypeKeys.MOVE_PADDLE, mouseX });
};