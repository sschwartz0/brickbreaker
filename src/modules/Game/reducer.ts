import levels from './levels';
import { 
  ActionTypes,
  InitialState,
  TypeKeys,
} from './types';

const initialState: InitialState = {
  brickColors: {
    0: '#FFFFFF',
    1: '#0095DD',
    2: '#0a74a8',
  },
  currentGame: {
    level: 1,
    score: 0,
    lives: 3,
    mouseX: 175,
  },
  currentLevel: {
    level: 0,
    bricksLeft: undefined,
    brickWidth: 40,
    brickHeight: 20,
    brickPadding: 0,
    brickOffsetTop: 90,
    brickOffsetLeft: 30,
    brickLayout: levels[3],
  },
  player: undefined,
  scores: undefined,
  status: 'READY',
};

const reducer = (state: InitialState = initialState, action: ActionTypes) => {
  switch (action.type) {
    
    case TypeKeys.CHANGE_GAME_STATUS : {
      const { status } = action;
      
      return {
        ...state,
        status,
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
      brickLayoutCopy[row][column].status = brickLayoutCopy[row][column].status - 1;
      const score = state.currentGame.score + 10;
      const bricks = brickLayoutCopy.reduce((acc: Object[], next: Object[]) => {
        return acc = [...acc, ...next]
      }, []);
      const bricksLeft = bricks.filter(({ status }: {status: number}) => status > 0).length;
      const brickLayout = bricksLeft === 0 ? levels[state.currentLevel.level + 1] : brickLayoutCopy;
      const level = bricksLeft === 0 ? state.currentLevel.level + 1 : state.currentLevel.level;
      const status = bricksLeft === 0 ? 'PAUSED' : 'PLAYING';
      
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          level,
          brickLayout,
          bricksLeft,
        },
        currentGame: {
          ...state.currentGame,
          score,
        },
        status,
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
    
    case TypeKeys.LOST_A_LIFE : {
      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          lives: state.currentGame.lives - 1,
        },
        currentLevel: {
          ...state.currentLevel,
          brickOffsetTop: state.currentLevel.brickOffsetTop + 30,
        },
        status: 'PAUSED',
      };
    }
    
    case TypeKeys.CHANGE_BRICK_LAYOUT: {
      const { column, row, status } = action;
      const layoutCopy: any = [...state.currentLevel.brickLayout]
      layoutCopy[row][column].status = status;
      return {
        ...state,
        currentLevel: {
          ...state.currentLevel,
          brickLayout: layoutCopy,
        }
      }
    }

    default:
      return state;
  }
};

export default reducer;
