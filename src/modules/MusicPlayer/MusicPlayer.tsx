import React, { PureComponent } from 'react';
import { MusicPlayerProps } from './types';

export default class LogicContainer extends PureComponent<MusicPlayerProps> {

  render () {
    const {
      currentSong,
      currentTime,
    } = this.props;
    
    return (
      <div className="music-container">
        {JSON.stringify(currentSong)}
        {currentTime}
      </div>
    )
  }
}