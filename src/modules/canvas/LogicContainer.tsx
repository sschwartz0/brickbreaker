import React, { PureComponent } from 'react';
import Canvas from './Canvas';
import { LogicContainerProps } from './types';


export default class LogicContainer extends PureComponent<LogicContainerProps> {
  
  render () {
    const {
      currentGame,
      movePaddle,
    } = this.props;
    
    return (
      <div className="canvas-container">
        <Canvas
          currentGame={currentGame}
          movePaddle={movePaddle}
        />
      </div>
    );
  }
}
