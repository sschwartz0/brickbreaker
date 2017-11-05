import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import LogicContainer from './LogicContainer';
import { pause, play, repeat, shuffle, changeSong } from './actions';
import { InitialState } from './types';


const mapStateToProps = (state: any, ownProps: {}) => {
  const musicPlayer: InitialState = state.musicPlayer;
  
  const { 
    currentSong,
    currentTime,
    isPlaying, 
    isRepeating,
    isShuffling,
    playlist,
  } = musicPlayer;
  
  return {
    currentSong,
    currentTime,
    isPlaying, 
    isRepeating,
    isShuffling,
    playlist,
    ...ownProps,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators({
  changeSong,
  pause,
  play,
  repeat,
  shuffle,
}, dispatch);

export default 
  connect<any, any>(mapStateToProps, mapDispatchToProps)(class DataContainer extends PureComponent<any> {

  render () {
    const {
      changeSong,
      currentSong,
      currentTime,
      isPlaying, 
      isRepeating,
      isShuffling,
      pause,
      playlist,
      play,
      repeat,
      shuffle,
    } = this.props;
    
    return (
      <LogicContainer
        changeSong={changeSong}
        currentSong={currentSong}
        currentTime={currentTime}
        isPlaying={isPlaying}
        isRepeating={isRepeating}
        isShuffling={isShuffling}
        playlist={playlist}
        onPause={pause}
        onPlay={play}
        repeat={repeat}
        shuffle={shuffle}
      />
    )
  }
})