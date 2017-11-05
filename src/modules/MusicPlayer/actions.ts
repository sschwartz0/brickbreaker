import { Dispatch } from 'redux';
import {
  CurrentSong,
  ChangeSongAction,
  PlayAction,
  PauseAction,
  RepeatAction,
  ShuffleAction,
  TypeKeys,
} from './types';

export const play = () => (dispatch: Dispatch<PlayAction>) => {
  dispatch({
    type: TypeKeys.PLAY,
  })
}

export const pause = () => (dispatch: Dispatch<PauseAction>) => {
  dispatch({
    type: TypeKeys.PAUSE,
  })
}

export const repeat = (isRepeating: boolean) => (dispatch: Dispatch<RepeatAction>) => {
  dispatch({
    type: TypeKeys.REPEAT,
    isRepeating,
  })
}

export const shuffle = (isShuffling: boolean) => (dispatch: Dispatch<ShuffleAction>) => {
  dispatch({
    type: TypeKeys.SHUFFLE,
    isShuffling,
  })
}

export const changeSong = (song: CurrentSong) => (dispatch: Dispatch<ChangeSongAction>) => {
  dispatch({
    type: TypeKeys.CHANGE_SONG,
    song,
  })
}