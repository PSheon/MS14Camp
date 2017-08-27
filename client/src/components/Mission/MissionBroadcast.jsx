import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import io from 'socket.io-client';

const socket = io();

class MissionBroadcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      open: false,
    };

    socket.on('Broadcast', ({ message }) => {
      this.setState({
        message,
        open: true,
      });
    });

    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default MissionBroadcast;