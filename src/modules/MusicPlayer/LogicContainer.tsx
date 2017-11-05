import React, { PureComponent } from 'react';
import MusicPlayer from './MusicPlayer';
import { LogicContainerProps } from './types';


export default class LogicContainer extends PureComponent<LogicContainerProps> {
  
  componentWillMount() {
    this.props.changeSong({
      category: 'Act 1',
      categoryLink: 'http://act1.com',
      createdDate: '11/01/17',
      lyrics: 'Lyrics',
      image: 'http://image.png',
      producer: 'Divine Tracks',
      releaseDate: '11/04/2017',
      title: 'Write Life',
      totalTime: '3:56',
    })
  }
  
  onRepeat = () => {
    this.props.repeat(!this.props.isRepeating);
  }
  
  onShuffle = () => {
    this.props.shuffle(!this.props.isShuffling);
  }

  render () {
    const {
      currentSong,
      currentTime,
      isPlaying,
      isRepeating,
      isShuffling,
      onPause,
      onPlay,
    } = this.props;
    
    return (
      <div className="music-container">
        <div className="play" onClick={onPlay}>Click to Play</div>
        <div className="pause" onClick={onPause}>Click to Pause</div>
        <div>Is Song Playing? { String(isPlaying) }</div>
        <div className="shuffle" onClick={this.onRepeat}>Click to Shuffle</div>
        <div>Is Song Repeating? { String(isRepeating) }</div>
        <div className="shuffle" onClick={this.onShuffle}>Click to Shuffle</div>
        <div>Is Song Shuffling? { String(isShuffling) }</div>
        <MusicPlayer
          currentSong={currentSong}
          currentTime={currentTime}
        />
      </div>
    )
  }
}