import React, { PureComponent } from 'react';
import StartScreen from './StartScreen';
import GameLevel from './GameLevel';
import GameOverScreen from './GameOverScreen';
import { LogicContainerProps } from './types';

export default class LogicContainer extends PureComponent<LogicContainerProps> {
  
  render () {
    const {
      currentGame,
      currentLevel,
      changeBrickStatus,
      changeGameStatus,
      increaseScore,
      lostALife,
      movePaddle,
      setBrickCoordinates,
      status,
    } = this.props;
    
    return (
      <div className="canvas-container">
        {status === 'GAME_OVER' && 
          <GameOverScreen
            changeGameStatus={changeGameStatus}
          />
        }
        {status === 'READY' && 
          <StartScreen
            changeGameStatus={changeGameStatus}
          />
        }
        {
          (status === 'NEW_GAME' || status === 'PLAYING' || status === 'PAUSED') && 
          <GameLevel
            currentGame={currentGame}
            currentLevel={currentLevel}
            changeBrickStatus={changeBrickStatus}
            changeGameStatus={changeGameStatus}
            increaseScore={increaseScore}
            lostALife={lostALife}
            movePaddle={movePaddle}
            setBrickCoordinates={setBrickCoordinates}
            status={status}
          />
        }
        Score: {currentGame.score}
      </div>
    );
  }
}
