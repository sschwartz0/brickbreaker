import React, { PureComponent } from 'react';

export default class CreateLevel extends PureComponent<any> {

  changeBrick = () => {
    const {
      column,
      row,
      status,
    } = this.props;
    console.log('test')
    const newStatus = status === 2 ? 0 : status + 1;
    this.props.changeBrickLayout(row, column, newStatus);
  }


  render() {
    const {
      brickColor,
      status,
    } = this.props;
    
    return (
        <div className="create-brick" style={{ backgroundColor: `${brickColor}` }}onClick={this.changeBrick}>{status}</div>
    );
  }
}
