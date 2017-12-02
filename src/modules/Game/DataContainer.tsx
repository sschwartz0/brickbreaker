import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import DisplayContainer from './DisplayContainer';
import { changeBrickLayout, changeGameStatus, changeBrickStatus, movePaddle, increaseScore, setBrickCoordinates, lostALife } from './actions';
import { InitialState } from './types';


const mapStateToProps = (state: any, ownProps: {}) => {
  const canvas: InitialState = state.canvas;
  
  const {
    brickColors,
    currentGame,
    currentLevel,
    player,
    scores,
    status,
  } = canvas;
  
  return {
    brickColors,
    currentGame,
    currentLevel,
    player,
    scores,
    status,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators({
  movePaddle,
  setBrickCoordinates,
  changeGameStatus,
  changeBrickStatus,
  changeBrickLayout,
  increaseScore,
  lostALife,
}, dispatch);

export default 
connect<any, any>(mapStateToProps, mapDispatchToProps)(class DataContainer extends PureComponent<any> {

  render () {
    const {
      brickColors,
      currentGame,
      currentLevel,
      player,
      scores,
      status,
      changeBrickLayout,
      changeBrickStatus,
      changeGameStatus,
      increaseScore,
      movePaddle,
      setBrickCoordinates,
      lostALife,
    } = this.props;
    
    return (
      <DisplayContainer
        brickColors={brickColors}
        currentGame={currentGame}
        currentLevel={currentLevel}
        player={player}
        scores={scores}
        status={status}
        changeBrickLayout={changeBrickLayout}
        changeBrickStatus={changeBrickStatus}
        changeGameStatus={changeGameStatus}
        increaseScore={increaseScore}
        lostALife={lostALife}
        movePaddle={movePaddle}
        setBrickCoordinates={setBrickCoordinates}
      />
    );
  }
});
