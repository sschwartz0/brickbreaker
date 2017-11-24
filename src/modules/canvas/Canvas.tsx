import React, { PureComponent } from 'react';
import { setInterval, clearInterval } from 'timers';
// import { LogicContainerProps } from './types';

export default class Canvas extends PureComponent < any > {

  canvas : any;
  game : any;
  paddle : any;
  ball : any;
  ballX : number;
  ballY : number;
  ballHorizontal : string = 'right';
  ballVertical : string = 'down';
  dropBall : any;

  componentDidMount() {
    this.canvas = document.getElementById('game')as HTMLCanvasElement;
    this
      .canvas
      .addEventListener('mousemove', (e : MouseEvent) => {
        this
          .props
          .movePaddle(e.screenX - 75);
      });
    this
      .canvas
      .addEventListener('click', () => {
        clearInterval(this.dropBall);
        this.ballHorizontal = 'right';
        this.ballVertical = 'down';
        this.startGame();
      });
    this.game = this
      .canvas
      .getContext('2d');
      
    for (let c=0; c < this.brickColumnCount; c++) {
      this.bricks[c] = [];
      for (let r=0; r < this.brickRowCount; r++) {
        this.bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  startGame = () => {
    this.ballX = this.canvas.width / 2;
    this.ballY = 0;

    this.dropBall = setInterval(() => {
      this
        .game
        .clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.ball = new Path2D();
      this
        .ball
        .moveTo(0, 0);
      this
        .ball
        .arc(this.ballX, this.ballY, 5, 0, 2 * Math.PI);
      this.game.fillStyle = 'rgb(200, 0, 0)';
      this
        .game
        .fill(this.ball);
      this.moveBall();

      this.paddle = new Path2D();
      this
        .paddle
        .rect(this.props.currentGame.mouseX, 570, 150, 15);
      this.game.fillStyle = 'rgb(0, 0, 0)';
      this
        .game
        .fill(this.paddle);
      
      this.drawBricks();

    }, 10);
  }

  moveBall = () => {
    if (this.ballX === this.canvas.width - 6) 
      this.ballHorizontal = 'left';
    if (this.ballX === 2) 
      this.ballHorizontal = 'right';
    if (this.ballY > this.canvas.height - 35 && this.ballX < this.props.currentGame.mouseX + 150 && this.ballX > this.props.currentGame.mouseX) {
      this.ballVertical = 'up';
      if (this.ballX > this.props.currentGame.mouseX + 75) 
        this.ballHorizontal = 'right';
      else 
        this.ballHorizontal = 'left';
    }
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
    
    this.collisionDetection();
    
    if (this.ballY > this.canvas.height - 10) 
      clearInterval(this.dropBall);
  }
  
  bricks: any[] = [];
  brickRowCount = 3;
  brickColumnCount = 7;
  brickWidth = 75;
  brickHeight = 20;
  brickPadding = 2;
  brickOffsetTop = 30;
  brickOffsetLeft = 30;
  
  drawBricks = () => {
    for (let c = 0; c < this.brickColumnCount; c++) {
      for (let r = 0; r < this.brickRowCount; r++) {
        if (this.bricks[c][r].status === 1) {
          const brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
          const brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          this.game.beginPath();
          this.game.rect(brickX, brickY, this.brickWidth, this.brickHeight);
          this.game.fillStyle = '#0095DD';
          this.game.fill();
          this.game.closePath();
        }
      }
    }
  }
  
  collisionDetection = () => {
    for (let c = 0; c < this.brickColumnCount; c++) {
      for(let r = 0; r < this.brickRowCount; r++) {
        const b = this.bricks[c][r];
        if (b.status === 1 && this.ballX > b.x && this.ballX < b.x + this.brickWidth && this.ballY > b.y && this.ballY < b.y + this.brickHeight) {
          this.ballHorizontal = this.ballHorizontal === 'left' ? 'right' : 'left';
          this.ballVertical = this.ballVertical === 'up' ? 'down' : 'up';
          b.status = 0;
        }
      }
    }
  }

  render() {

    const {} = this.props;

    return (
      <div className="canvas-container">
        <canvas id="game" width="600px" height="600px"></canvas>
        <p></p>
        {this.props.currentGame.mouseX}
      </div>
    );
  }
}
