import { 
  ActionTypes,
  InitialState,
  TypeKeys,
} from './types';

const initialState: InitialState = {
  currentSong: {
    category: undefined,
    categoryLink: undefined,
    createdDate: undefined,
    lyrics: undefined,
    image: undefined,
    producer: undefined,
    releaseDate: undefined,
    title: undefined,
    totalTime: undefined,
  },
  currentTime: undefined,
  isPlaying: false,
  isShuffling: false,
  isRepeating: false,
  playlist: [],
};

const reducer = (state: InitialState = initialState, action: ActionTypes) => {
  switch (action.type) {
    
    case TypeKeys.PLAY : {
      return {
        ...state,
        isPlaying: true,
      }
    }

    case TypeKeys.PAUSE : {
      return {
        ...state,
        isPlaying: false,
      }
    }
    
    case TypeKeys.SHUFFLE : {
      const {
        isShuffling,
      } = action;
      
      return {
        ...state,
        isShuffling,
      }
    }
    
    case TypeKeys.REPEAT : {
      const {
        isRepeating,
      } = action;
      
      return {
        ...state,
        isRepeating,
      }
    }

    case TypeKeys.CHANGE_SONG : {
      const {
        song,
      } = action;
      
      return {
        ...state,
        currentSong: song,
      }
    }

    default:
      return state
  }
}

export default reducer;