import React, { PureComponent } from 'react';
import CreateBrick from './CreateBrick';
import Clipboard from 'clipboard';

export default class CreateLevel extends PureComponent<any> {

  startNewGame = () => {
    this.props.changeGameStatus('NEW_GAME')
  }

  componentDidMount() {
    new Clipboard('.copy');
  }

  render() {
    const {
      brickColors,
      changeBrickLayout,
      currentLevel: {
        brickLayout,
      },
    } = this.props;
    
    return (
      <div className="create-level-container">
        <div className="title">
          Make Your Own Level
        </div>
        <div className="instructions">
          Click on a rectangle to start creating. The darker the color the more hits it takes to break that brick!
        </div>
        <div className="level-maker">
          {brickLayout.map((row: any, rowIndex: any) => {
            return (
              <div className="create-row">
                {row.map((brick: any, colIndex: any) => {
                  return (
                    <CreateBrick
                      brickColor={brickColors[brick.status]}
                      changeBrickLayout={changeBrickLayout}
                      status={brick.status}
                      key={rowIndex + colIndex}
                      row={rowIndex}
                      column={colIndex}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
        <span className="copy" data-clipboard-text={JSON.stringify(brickLayout)}>
          Copy JSON to clipboard
        </span>
      </div>
    );
  }
}
