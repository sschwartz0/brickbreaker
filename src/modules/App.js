import React from 'react';

export default class App extends React.Component {
  onClick = () => {
    console.log('yodfgsdfdfg')
  }

  onClick3 = () => {
    alert('dsfsdf')
  }

  render () {
    return <p onClick={this.onClick}> Hello asasasas!</p>;
  }
}