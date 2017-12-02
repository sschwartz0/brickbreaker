import React, { PureComponent } from 'react';
import StartScreen from './GameScreens/StartScreen';
import GameLevel from './GameScreens/GameLevel';
import GameOverScreen from './GameScreens/GameOverScreen';
import CreateLevel from './LevelMaker/CreateLevel';
import { DisplayContainerProps } from './types';

export default class DisplayContainer extends PureComponent<DisplayContainerProps> {
  
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
      <div className="game-container">
        <div className="game-screens">
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
        </div>
        <div className="level-maker">
          <CreateLevel
            brickColors={brickColors}
            currentLevel={currentLevel}
            changeBrickLayout={changeBrickLayout}
          />
        </div>
      </div>
    );
  }
}
