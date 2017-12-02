import React, { PureComponent } from 'react';
import StartScreen from './StartScreen';
import GameLevel from './GameLevel';
import GameOverScreen from './GameOverScreen';
import CreateLevel from './CreateLevel';
import { LogicContainerProps } from './types';

export default class LogicContainer extends PureComponent<LogicContainerProps> {
  
  render () {
    const {
      brickColors,
      currentGame,
      currentLevel,
      changeBrickLayout,
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
        {status !== 'READY' && 
          <div className="stats-container">
            <div className="score">Score: {currentGame.score}</div>
            <div className="lives">Lives: {currentGame.lives}</div>
         </div>
        }
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
            brickColors={brickColors}
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
        <CreateLevel
          brickColors={brickColors}
          currentLevel={currentLevel}
          changeBrickLayout={changeBrickLayout}
        />
      </div>
    );
  }
}
