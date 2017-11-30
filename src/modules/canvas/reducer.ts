import { 
  ActionTypes,
  InitialState,
  TypeKeys,
} from './types';

const initialState: InitialState = {
  currentGame: {
    level: 1,
    score: 0,
    lives: 3,
    mouseX: 175,
  },
  currentLevel: {
    totalBricks: 15,
    bricksLeft: undefined,
    brickWidth: 75,
    brickHeight: 20,
    brickPadding: 2,
    brickOffsetTop: 30,
    brickOffsetLeft: 30,
    brickLayout: [
      [{ x: 0, y: 0, status: 0 }, { x: 0, y: 0, status: 1 }, { x: 0, y: 0, status: 1 }, { x: 0, y: 0, status: 1 }, { x: 0, y: 0, status: 0 }],
      [{ x: 0, y: 0, status: 1 }, { x: 0, y: 0, status: 1 }, { x: 0, y: 0, status: 1 }, { x: 0, y: 0, status: 1 }, { x: 0, y: 0, status: 1 }],
      [{ x: 0, y: 0, status: 0 }, { x: 0, y: 0, status: 1 }, { x: 0, y: 0, status: 1 }, { x: 0, y: 0, status: 1 }, { x: 0, y: 0, status: 0 }],
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
    
    case TypeKeys.INCREASE_SCORE : {
      const { score } = action;
      return {
        ...state,
        currentGame: {
          score,
        },
      };
    }
    
    case TypeKeys.SET_BRICK_COORDINATES : {
      const { row, column, x, y } = action;
      
      const brickLayoutCopy: any = [...state.currentLevel.brickLayout]
      brickLayoutCopy[row][column].x = x;
      brickLayoutCopy[row][column].y = y;
      
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          brickLayout: brickLayoutCopy,
        },
      };
    }
    
    case TypeKeys.CHANGE_BRICK_STATUS : {
      const { row, column } = action;
      
      const brickLayoutCopy: any = [...state.currentLevel.brickLayout]
      brickLayoutCopy[row][column].status = 0;
      const score = state.currentGame.score + 10;
      
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          brickLayout: brickLayoutCopy,
        },
        currentGame: {
          ...state.currentGame,
          score,
        }
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
