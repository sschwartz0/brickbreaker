import React, { PureComponent } from 'react';
// import { LogicContainerProps } from './types';

export default class GameLevel extends PureComponent<any> {

  canvas: any;
  game: any;
  paddle: any;
  ball: any;
  ballX: number;
  ballY: number;
  ballHorizontal: string = 'right';
  ballVertical: string = 'down';
  ballHorizontalSpeed: number = 6;
  ballVerticalSpeed: number = 6;
  dropBall: any;
  whichKey: string = null;
  
  moveThePaddle = () => {
    if (this.whichKey === 'left' && this.props.currentGame.mouseX > 0) {
      this.props.movePaddle(this.props.currentGame.mouseX - 5)
    }
    if (this.whichKey === 'right' && this.props.currentGame.mouseX + 150 < this.canvas.width) {
      this.props.movePaddle(this.props.currentGame.mouseX + 5)
    }
    if (this.whichKey !== null) {
      window.requestAnimationFrame(this.moveThePaddle);
    }
  }

  componentDidMount() {
    (() => {
      const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
      const cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
      window.cancelAnimationFrame = cancelAnimationFrame;
    })();
    this.canvas = document.getElementById('game') as HTMLCanvasElement;
    
    // this.canvas.addEventListener('mousemove', (e: MouseEvent) => {
    //   this.props.movePaddle(e.screenX - 75);
    // });
    
    this.canvas.addEventListener('click', () => {
      this.props.changeGameStatus('PLAYING')
      this.ballHorizontal = 'right';
      this.ballVertical = 'down';
      this.ballX = this.canvas.width / 2;
      this.ballY = 0;
      this.dropBall = window.requestAnimationFrame(this.startGame);
    });
    
    document.body.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        this.whichKey = 'left'
        window.requestAnimationFrame(this.moveThePaddle);
      }
      if (e.key === 'ArrowRight') {
        this.whichKey = 'right'
        window.requestAnimationFrame(this.moveThePaddle);
      }
    })
    
    document.body.addEventListener('keyup', (e: any) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') 
        this.whichKey = null;
    })
    
    this.game = this.canvas.getContext('2d');
    this.initialDrawBricks()
  }

  
  startGame = () => {
    this.game.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ball = new Path2D();
    this.ball.moveTo(0, 0);
    this.ball.arc(this.ballX, this.ballY, 5, 0, 2 * Math.PI, true);
    this.game.fillStyle = 'rgb(200, 0, 0)';
    this.game.fill(this.ball);

    this.paddle = new Path2D();
    this.paddle.rect(this.props.currentGame.mouseX, 570, 150, 15);
    this.game.fillStyle = 'rgb(0, 0, 0)';
    this.game.fill(this.paddle);
    
    this.drawBricks();

    if (this.ballX > this.canvas.width - 6)
      this.ballHorizontal = 'left';
    if (this.ballX < 5)
      this.ballHorizontal = 'right';
    if (this.ballY > this.canvas.height - 35 && this.ballX < this.props.currentGame.mouseX + 150 && this.ballX > this.props.currentGame.mouseX) {
      this.ballVertical = 'up';
      if (this.ballX > this.props.currentGame.mouseX + 75) {
        this.ballHorizontal = 'right';
      }
      else {
        this.ballHorizontal = 'left';
      }
      const ratio = (150/10)/2
      this.ballHorizontalSpeed = Math.abs(((this.ballX-this.props.currentGame.mouseX)/10)-ratio);
    }
    
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

    this.collisionDetection();

    if (this.ballY > this.canvas.height - 10) {
      this.ballY = 15;
      this.ballHorizontalSpeed = 4;
      this.props.lostALife();

      if (this.props.currentGame.lives === 0) {
        this.props.changeGameStatus('GAME_OVER');
      }
      else {
        console.log('lost a life')
      }
    }
    
    if (this.props.status === 'PAUSED')
      window.cancelAnimationFrame(this.dropBall)
    else 
      this.dropBall = window.requestAnimationFrame(this.startGame);
  }
  
  initialDrawBricks = () => {
    const {
      brickColors,
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
    
    for (let r = 0; r < brickLayout.length; r++) {
      for (let c = 0; c < brickLayout[r].length; c++) {
        const brickStatus = brickLayout[r][c].status;
        if (brickStatus > 0) {
          const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
          const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
          setBrickCoordinates(r, c, brickX, brickY);
          this.game.beginPath();
          this.game.rect(brickX, brickY, brickWidth, brickHeight);
          this.game.fillStyle = brickColors[brickStatus];
          this.game.fill();
          this.game.closePath();
        }
      }
    }
  }

  drawBricks = () => {
    const {
      brickLayout,
      brickHeight,
      brickWidth,
    } = this.props.currentLevel;

    for (let r = 0; r < brickLayout.length; r++) {
      for (let c = 0; c < brickLayout[r].length; c++) {
        const brickStatus = brickLayout[r][c].status;
        if (brickStatus > 0) {
          const brickX = brickLayout[r][c].x;
          const brickY = brickLayout[r][c].y;
          this.game.beginPath();
          this.game.rect(brickX, brickY, brickWidth, brickHeight);
          if (brickStatus === 1)
            this.game.fillStyle = '#0095DD';
          else if (brickStatus === 2)
            this.game.fillStyle = '#0a74a8';
          this.game.fill();
          this.game.closePath();
        }
      }
    }
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
    
    for (let r = 0; r < brickLayout.length; r++) {
      for (let c = 0; c < brickLayout[r].length; c++) {
        const brick =  brickLayout[r][c];
        if (brickLayout[r][c].status > 0 && this.ballX > brick.x && this.ballX < brick.x + brickWidth && this.ballY > brick.y && this.ballY < brick.y + brickHeight) {
          this.ballHorizontal = this.ballHorizontal === 'left' ? 'right' : 'left';
          this.ballVertical = this.ballVertical === 'up' ? 'down' : 'up';
          changeBrickStatus(r, c)
        }
      }
    }
  }
  
  pause = () => {
    window.cancelAnimationFrame(this.dropBall)
    this.props.changeGameStatus('PAUSED')
  }
  
  resume = () => {
    this.dropBall = window.requestAnimationFrame(this.startGame);
    this.props.changeGameStatus('PLAYING')
  }

  render() {

    const { } = this.props;

    return (
      <div className="canvas-container">
        <canvas id="game" width="600px" height="600px"></canvas>
        <p>Lives: {this.props.currentGame.lives}</p>
        <p><button onClick={this.pause}>Pause</button></p>
        <p><button onClick={this.resume}>Resume</button></p>
      </div>
    );
  }
}
