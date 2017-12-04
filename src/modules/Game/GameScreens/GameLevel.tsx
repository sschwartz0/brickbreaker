import React, { PureComponent } from 'react';
// import { LogicContainerProps } from './types';

export default class GameLevel extends PureComponent<any> {

  canvas: any;
  game: any;
  paddle: any;
  paddleX: number;
  ball: any;
  ballX: number;
  ballY: number;
  ballHorizontal: string;
  ballVertical: string;
  ballHorizontalSpeed: number = 3;
  ballVerticalSpeed: number = 3;
  animation: any;
  whichKey: string = null;

  componentDidMount() {
    this.setAnimationGlobals();
    
    this.canvas = document.getElementById('game') as HTMLCanvasElement;
    this.game = this.canvas.getContext('2d');
    
    this.canvas.addEventListener('mousemove', this.moveThePaddleMouse);
    this.canvas.addEventListener('click', this.newBall);
    
    this.initialDraw()
    
    // TODO: Make smooth
    // document.body.addEventListener('keydown', this.moveThePaddleArrowKeys)
    // document.body.addEventListener('keyup', (e: any) => {
    //   if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') 
    //     this.whichKey = null;
    // })
  }
  
  setAnimationGlobals = () => {
    const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;
  }
  
  moveThePaddleMouse = (e: MouseEvent) => {
    const canvasDiv = document.querySelector('.canvas-container');
    const canvasOffsetLeft = canvasDiv.getBoundingClientRect().left;
    this.paddleX = e.screenX - canvasOffsetLeft - 37.5;
    this.props.movePaddle(this.paddleX);
  }
  
  newBall = () => {
    this.props.changeGameStatus('PLAYING')
    this.ballHorizontal = 'right';
    this.ballVertical = 'up';
    this.ballX = this.paddleX + 37.5;
    this.ballY = 560;
    window.cancelAnimationFrame(this.animation)
    this.animation = window.requestAnimationFrame(this.launchBall);
  }
  

  launchBall = () => {
    this.game.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ball = new Path2D();
    this.ball.moveTo(0, 0);
    this.ball.arc(this.ballX, this.ballY, 5, 0, 2 * Math.PI);
    this.game.fillStyle = 'rgb(242, 76, 39)';
    this.game.fill(this.ball);

    this.paddle = new Path2D();
    this.paddle.rect(this.props.currentGame.mouseX, 570, 75, 15);
    this.game.fillStyle = 'rgb(86, 185, 208)';
    this.game.fill(this.paddle);

    if (this.props.status === 'PAUSED') {
      this.ballX = this.paddleX + 37.5;
    }

    this.drawBricks();
    this.setBallSpeed();
    this.moveBall();
    this.collisionDetection();
    this.lifeLostCheck()

    this.animation = window.requestAnimationFrame(this.launchBall);
  }
  
  setBallSpeed = () => {
    const hitRightWall = this.ballX > this.canvas.width - 6;
    const hitLeftWall = this.ballX < 5;
    const hitPaddle = this.ballY > this.canvas.height - 35 
      && this.ballX < this.props.currentGame.mouseX + 75 
      && this.ballX > this.props.currentGame.mouseX;
    const hitPaddleRightSide = this.ballX > this.props.currentGame.mouseX + 37.5;
    
    if (hitRightWall)
      this.ballHorizontal = 'left';
    if (hitLeftWall)
      this.ballHorizontal = 'right';
    if (hitPaddle) {
      this.ballVertical = 'up';
      if (hitPaddleRightSide) {
        this.ballHorizontal = 'right';
      }
      else {
        this.ballHorizontal = 'left';
      }
      const ratio = (75/10)/2;
      this.ballHorizontalSpeed = Math.abs(((this.ballX-this.props.currentGame.mouseX)/10)-ratio);
    }
  }
  
  moveBall = () => {
    if (this.props.status === 'PLAYING') {
      if (this.ballY < 5)
        this.ballVertical = 'down';
      if (this.ballHorizontal === 'right')
        this.ballX += this.ballHorizontalSpeed;
      if (this.ballHorizontal === 'left')
        this.ballX -= this.ballHorizontalSpeed;
      if (this.ballVertical === 'up')
        this.ballY -= this.ballVerticalSpeed;
      if (this.ballVertical === 'down')
        this.ballY += this.ballVerticalSpeed;
    }
  }
  
  lifeLostCheck = () => {
    if (this.ballY > this.canvas.height - 10) {
      this.ballY = 560;
      this.props.lostALife();
      if (this.props.currentGame.lives === 0) {
        this.props.changeGameStatus('GAME_OVER');
      }
    }
  }
  
  drawABrick = (x: number, y: number, status: number) => {
    const {
      brickColors,
      currentLevel: {
        brickHeight,
        brickWidth,
      },
    } = this.props;
    
    this.game.beginPath();
    this.game.rect(x, y, brickWidth, brickHeight);
    this.game.fillStyle = brickColors[status];
    this.game.fill();
    this.game.lineWidth = '1';
    this.game.strokeStyle = '#DADADA';
    this.game.stroke();
    this.game.closePath();
  }
  
  initialDraw = () => {
    const {
      currentLevel: {
        brickHeight,
        brickWidth,
        brickPadding,
        brickOffsetLeft,
        brickOffsetTop,
        brickLayout,
      },
      setBrickCoordinates,
    } = this.props;
    
    this.paddle = new Path2D();
    this.paddle.rect(165, 570, 75, 15);
    this.game.fillStyle = 'rgb(86, 185, 208)';
    this.game.fill(this.paddle);
    
    this.ball = new Path2D();
    this.ball.moveTo(0, 0);
    this.ball.arc(202.5, 560, 5, 0, 2 * Math.PI, true);
    this.game.fillStyle = 'rgb(242, 76, 39)';
    this.game.fill(this.ball);
    
    brickLayout.forEach((row: any[], rowPosition: number) => {
      row.forEach((brick: any, columnPosition: number) => {
        if (brick.status > 0) {
          const xCoor = (columnPosition * (brickWidth + brickPadding)) + brickOffsetLeft;
          const yCoor = (rowPosition * (brickHeight + brickPadding)) + brickOffsetTop;
          setBrickCoordinates(rowPosition, columnPosition, xCoor, yCoor);
          this.drawABrick(xCoor, yCoor, brick.status)
        }
      })
    })
  }

  drawBricks = () => {
    const { brickLayout } = this.props.currentLevel;

    brickLayout.forEach((row: any[]) => {
      row.forEach((brick: any) => {
        if (brick.status > 0) 
          this.drawABrick(brick.x, brick.y, brick.status)
      })
    })
  }

  collisionDetection = () => {
    const {
      currentLevel: {
        brickLayout,
        brickHeight,
        brickWidth,
      },
      changeBrickStatus,
    } = this.props;
    
    brickLayout.forEach((row: any[], rowPosition: number) => {
      row.forEach((brick: any, columnPosition: number) => {
        const ballHitBrick = brick.status > 0 
          && this.ballX > brick.x 
          && this.ballX < brick.x + brickWidth 
          && this.ballY > brick.y 
          && this.ballY < brick.y + brickHeight;
        
        if (ballHitBrick) {
          this.ballVertical = this.ballVertical === 'up' ? 'down' : 'up';
          changeBrickStatus(rowPosition, columnPosition)
        }
      })
    })
  }
  
  pause = () => {
    window.cancelAnimationFrame(this.animation)
    this.props.changeGameStatus('PAUSED')
  }
  
  resume = () => {
    this.animation = window.requestAnimationFrame(this.launchBall);
    this.props.changeGameStatus('PLAYING')
  }
  
  // TODO: Make smooth
  // moveThePaddleArrowKeys = (e) => {
  //   if (e.key === 'ArrowLeft') {
  //     this.whichKey = 'left'
  //     window.requestAnimationFrame(this.moveThePaddleArrowKeys);
  //   }
  //   if (e.key === 'ArrowRight') {
  //     this.whichKey = 'right'
  //     window.requestAnimationFrame(this.moveThePaddleArrowKeys);
  //   }
  //   if (e.keyCode === 32) {
  //     this.props.status === 'PLAYING' ? this.props.changeGameStatus('PAUSED') : this.props.changeGameStatus('PLAYING');
  //   }
  //   if (this.whichKey === 'left' && this.props.currentGame.mouseX > 0) {
  //     this.props.movePaddle(this.props.currentGame.mouseX - 5)
  //   }
  //   if (this.whichKey === 'right' && this.props.currentGame.mouseX + 75 < this.canvas.width) {
  //     this.props.movePaddle(this.props.currentGame.mouseX + 5)
  //   }
  //   if (this.whichKey !== null) {
  //     window.requestAnimationFrame(this.moveThePaddleArrowKeys);
  //   }
  // }

  render() {
    const { } = this.props;

    return (
      <div className="canvas-container">
        <canvas id="game" width="400px" height="600px"></canvas>
      </div>
    );
  }
}
