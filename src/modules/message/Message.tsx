import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMessage } from './actions';

interface Props {
  text: string;
};

interface StateProps {
  messages: {
    message: string,
  },
  message: string,
};


interface DispatchProps {
  changeMessage: (message: string) => void;
}

type MessageProps = Props & StateProps & DispatchProps;

const mapStateToProps = (state: StateProps, ownProps: {}) => {
  const { message } = state;
  
  return {
    message,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeMessage,
}, dispatch);

@connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)
export default class Message extends React.PureComponent<MessageProps> {

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

    return <div onClick={this.onClick}> Hello {message}! {text}</div>;
  }
}