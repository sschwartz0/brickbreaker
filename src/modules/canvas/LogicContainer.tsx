import React, { PureComponent } from 'react';
import Canvas from './Canvas';
import { LogicContainerProps } from './types';


export default class LogicContainer extends PureComponent<LogicContainerProps> {
  
  render () {
    const {
      currentGame,
      currentLevel,
      changeBrickStatus,
      increaseScore,
      movePaddle,
      setBrickCoordinates,
    } = this.props;
    
    return (
      <div className="canvas-container">
        <Canvas
          currentGame={currentGame}
          currentLevel={currentLevel}
          changeBrickStatus={changeBrickStatus}
          increaseScore={increaseScore}
          movePaddle={movePaddle}
          setBrickCoordinates={setBrickCoordinates}
        />
        Score: {currentGame.score}
      </div>
    );
  }
}
