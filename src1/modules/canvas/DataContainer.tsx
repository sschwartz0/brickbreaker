import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import LogicContainer from './LogicContainer';
import { changeGameStatus, changeBrickStatus, movePaddle, increaseScore, setBrickCoordinates, lostALife } from './actions';
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
      changeBrickStatus,
      changeGameStatus,
      increaseScore,
      movePaddle,
      setBrickCoordinates,
      lostALife,
    } = this.props;
    
    return (
      <LogicContainer
        brickColors={brickColors}
        currentGame={currentGame}
        currentLevel={currentLevel}
        player={player}
        scores={scores}
        status={status}
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
