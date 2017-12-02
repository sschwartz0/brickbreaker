import React, { PureComponent } from 'react';
import CreateBrick from './CreateBrick';

export default class CreateLevel extends PureComponent<any> {

  startNewGame = () => {
    this.props.changeGameStatus('NEW_GAME')
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
        {brickLayout.map((row: any, rowIndex: any) => {
          return (
            <div className="create-row">
              {row.map((brick: any, colIndex: any) => {
                return (
                  <CreateBrick
                    brickColor={brickColors[brick.status]}
                    changeBrickLayout={changeBrickLayout}
                    status={brick.status}
                    row={rowIndex}
                    column={colIndex}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    );
  }
}
