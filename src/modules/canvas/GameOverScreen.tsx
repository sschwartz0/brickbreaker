import React, { PureComponent } from 'react';
// import { LogicContainerProps } from './types';

export default class GameOverScreen extends PureComponent<any> {

  componentDidMount() {
  
    // document.body.addEventListener('click', () => {
    //   this.props.changeGameStatus('PLAYING')
    // });
  }


  render() {


    return (
      <div className="canvas-container">
        Game Over!
      </div>
    );
  }
}
