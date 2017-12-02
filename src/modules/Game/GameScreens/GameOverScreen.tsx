import React, { PureComponent } from 'react';
// import { LogicContainerProps } from './types';

export default class GameOverScreen extends PureComponent<any> {

  startNewGame = () => {
    this.props.changeGameStatus('NEW_GAME')
  }


  render() {

    return (
      <div className="game-over-container">
        <div className="title">GAME OVER!</div>
        <button className="play-button" onClick={this.startNewGame}>PLAY AGAIN</button>
      </div>
    );
  }
}
