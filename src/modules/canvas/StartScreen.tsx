import React, { PureComponent } from 'react';
// import { LogicContainerProps } from './types';

export default class StartScreen extends PureComponent<any> {

  startNewGame = () => {
    this.props.changeGameStatus('NEW_GAME')
  }
  
  componentDidMount() {
    document.body.addEventListener('click', this.startNewGame)
  }
  
  componentWillUnmount() {
    document.body.removeEventListener('click', this.startNewGame)
  }


  render() {


    return (
      <div className="canvas-container">
        Click anywhere to start playing
      </div>
    );
  }
}
