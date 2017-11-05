// import { Dispatch } from 'redux';

export interface InitialState {
  currentSong: {
    category: string;
    categoryLink: string;
    createdDate: string;
    lyrics: string;
    image: string;
    producer: string;
    releaseDate: string;
    title: string;
    totalTime: string;
  };
  currentTime: string;
  isPlaying: boolean;
  isShuffling: boolean;
  isRepeating: boolean;
  playlist: Song[];
}

export interface Song {
  category: string;
  categoryLink: string;
  image: string;
  isDeleting: boolean;
  isDragging: boolean;
  isPlaying: boolean;
  position: number;
  title: string,
  totalTime: string;
}

export interface CurrentSong {
  category: string;
  categoryLink: string;
  createdDate: string;
  lyrics: string;
  image: string;
  producer: string;
  releaseDate: string;
  title: string;
  totalTime: string;
}

export interface LogicContainerProps {
  changeSong: (song: CurrentSong) => void;
  currentSong: CurrentSong;
  currentTime: string;
  isPlaying: boolean;
  isShuffling: boolean;
  isRepeating: boolean;
  onPause: () => void;
  onPlay: () => void;
  shuffle: (isShuffling: boolean) => void;
  repeat: (isRepeating: boolean) => void;
  playlist: Song[];
}

export interface MusicPlayerProps {
  currentSong: CurrentSong;
  currentTime: string;
  
}


//
// ACTIONS
//

export type ActionTypes =
| PlayAction
| PauseAction
| ShuffleAction
| RepeatAction
| ChangeSongAction;

export enum TypeKeys {
  CHANGE_SONG = 'musicPlayer::CHANGE_SONG',
  PLAY = 'musicPlayer::PLAY',
  PAUSE = 'musicPlayer::PAUSE',
  SHUFFLE = 'musicPlayer::SHUFFLE',
  REPEAT = 'musicPlayer::REPEAT',
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

export interface ChangeSongAction {
  type: TypeKeys.CHANGE_SONG;
  song: CurrentSong;
}