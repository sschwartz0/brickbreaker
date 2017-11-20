import React, { PureComponent } from 'react';
import { setInterval, clearInterval } from 'timers';
// import { LogicContainerProps } from './types';

export default class Canvas extends PureComponent<any> {

  canvas: any;
  game: any;
  paddle: any;
  ball: any;
  ballX: number;
  ballY: number;
  ballHorizontal: string = 'right';
  ballVertical: string = 'down';
  dropBall: any;
  
  componentDidMount() {
    this.canvas = document.getElementById('game') as HTMLCanvasElement;
    this.canvas.addEventListener('mousemove', (e: MouseEvent) => {
      this.props.movePaddle(e.screenX - 75);
    });
    this.canvas.addEventListener('click', () => {
      clearInterval(this.dropBall);
      this.ballHorizontal = 'right';
      this.ballVertical = 'down';
      this.startGame();
    });
    this.game = this.canvas.getContext('2d');
  }
  
  startGame = () => {
    this.ballX = this.canvas.width / 2;
    this.ballY = 0;
    
    this.dropBall = setInterval(() => {
      this.game.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      this.ball = new Path2D();
      this.ball.moveTo(0, 0);
      this.ball.arc(this.ballX, this.ballY, 5, 0, 2 * Math.PI);
      this.game.fillStyle = 'rgb(200, 0, 0)';      
      this.game.fill(this.ball);
      this.moveBall();
      
      this.paddle = new Path2D();
      this.paddle.rect(this.props.currentGame.mouseX, 570, 150, 15);
      this.game.fillStyle = 'rgb(0, 0, 0)';      
      this.game.fill(this.paddle);


    }, 10);
  }
  
  moveBall = () => {
    if (this.ballX === this.canvas.width - 6) 
      this.ballHorizontal = 'left';
    if (this.ballX === 2) 
      this.ballHorizontal = 'right';
    if (
      this.ballY > this.canvas.height - 35 && 
      this.ballX < this.props.currentGame.mouseX + 150 && 
      this.ballX > this.props.currentGame.mouseX
    )
      this.ballVertical = 'up';
    if (this.ballY === 2) 
      this.ballVertical = 'down';

    if (this.ballHorizontal === 'right')
      this.ballX += 2;
    if (this.ballHorizontal === 'left')
      this.ballX -= 2;
    if (this.ballVertical === 'up')
      this.ballY -= 2;
    if (this.ballVertical === 'down')
      this.ballY += 2;
    
    if (this.ballY > this.canvas.height - 10)
      clearInterval(this.dropBall);
  }
  
  render () {
    
    const {

    } = this.props;
    
    return (
      <div className="canvas-container">
        <canvas id="game" width="600px" height="600px">
        </canvas>
        <p>
        </p>
        {this.props.currentGame.mouseX}
      </div>
    );
  }
}
