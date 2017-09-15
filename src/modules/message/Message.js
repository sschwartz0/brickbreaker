import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMessage } from './actions';

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.messages.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMessage: message => { dispatch(changeMessage(message)) }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Message extends PureComponent {

  onClick = () => {
    this.props.changeMessage('test')
  }

  render () {
    const {
      changeMessage,
      message,
      text,
    } = this.props;

    console.log(this.props)

    return <p onClick={this.onClick}> Hello {message}! {text}</p>;
  }
}