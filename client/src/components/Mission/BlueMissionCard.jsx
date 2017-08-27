import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import io from 'socket.io-client';
const socket = io();

import * as actions from '../../actions';

class BlueMissionCard extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    socket.on('news', (data) => {
      console.log(data);
    });
  }

  handleClick() {
    this.props.addBlueProgress(1);
    
  }

  render() {
    return (
      <div className="col s12 m6">
        <div className="card blue lighten-3">
          <div className="card-content white-text">
              <span className="card-title">鈷藍盔甲</span>
              <p>{"任務已經完成百分之" + this.props.blueMission + "了"}</p>
          </div>
          <div className="card-action">
            <LinearProgress mode="determinate" value={this.props.blueMission}
              color="#2196F3"
            />
            <RaisedButton label="blue" primary={true} onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ blueMission }) {
  return { blueMission };
}

export default connect(mapStateToProps, actions)(BlueMissionCard);