import { 
  ActionTypes,
  InitialState,
  TypeKeys,
} from './types';

const initialState: InitialState = {
  currentGame: {
    level: undefined,
    score: undefined,
    lives: undefined,
    mouseX: 175,
  },
  currentLevel: {
    totalBricks: undefined,
    bricksLeft: undefined,
    brickLayout: [
      [undefined, true, true, true, undefined],
      [true, true, true, true, true],
      [undefined, true, true, true, undefined],
    ],
  },
  player: undefined,
  scores: undefined,
  status: undefined,
};

const reducer = (state: InitialState = initialState, action: ActionTypes) => {
  switch (action.type) {
    
    case TypeKeys.PLAY : {
      return {
        ...state,
        status: 'Playing',
      };
    }
    
    case TypeKeys.PAUSE : {
      return {
        ...state,
        status: 'Paused',
      };
    }

    case TypeKeys.MOVE_PADDLE : {
      const { mouseX } = action;
      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          mouseX,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
