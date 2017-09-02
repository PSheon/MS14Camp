import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import io from 'socket.io-client';

import * as actions from '../../actions';

const socket = io();

class MissionBroadcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '',
      message: '',
      open: false,
    };

    socket.on('Broadcast', ({ message, team }) => {
      let Color = '';
      switch (team) {
        case 'red': Color = '#F44336'; break;
        case 'blue': Color = '#2196F3'; break;
        case 'green': Color = '#43A047'; break;
        case 'yellow': Color = '#FFF176'; break;
      };
      this.setState({
        bgColor: Color,
        message,
        open: true,
      });
      this.props.initTeamProgress();
    });

    this.handleActionTouchTap = this.handleActionTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleActionTouchTap = () => {
    if (this.refs.snackbar) {
      this.setState({
        open: false,
      });
    }
  }

  handleRequestClose = () => {
    if (this.refs.snackbar) {
      this.setState({
        open: false,
      });
    }
  };

  render() {
    return (
      <div>
        <Snackbar
          ref="snackbar"
          bodyStyle={{
            backgroundColor: this.state.bgColor
          }}
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          action="X"
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default connect(null, actions)(MissionBroadcast);