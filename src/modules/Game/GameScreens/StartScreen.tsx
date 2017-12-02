import React, { PureComponent } from 'react';
// import { LogicContainerProps } from './types';

export default class StartScreen extends PureComponent<any> {

  startNewGame = () => {
    this.props.changeGameStatus('NEW_GAME')
  }

  render() {
    return (
      <div className="start-screen-container">
        <div className="title">BRICKBREAKER</div>
        <button className="play-button" onClick={this.startNewGame}>PLAY</button>
      </div>
    );
  }
}
