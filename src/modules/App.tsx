import React, { PureComponent } from 'react';
import DataContainer from './Game/DataContainer';

export default class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <DataContainer />
      </div>
    );
  }
}
