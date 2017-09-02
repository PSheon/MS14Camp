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
        <div className="card lighten-3">
          <div className="card-content">
            <div className="row" style={{ margin: 0 }}>
              <span className="card-title">
                <img style={{ height: '25px', paddingRight: '15px', paddingTop: '5px' }}
                  src={"https://firebasestorage.googleapis.com/v0/b/msseed14th.appspot.com/o/logo_armor.svg?alt=media&token=ff52d988-940c-4604-b045-498ce363bf45"}
                />鈷藍盔甲</span>
              <p className="col s8 m8"
                style={{ padding: 0 }}>目前進度</p>
              <h5 
                className="col s4 m4" 
                style={{
                  margin: 0,
                  padding: 0,
                  color:'rgb(0, 188, 212)',
                  textAlign: 'right'}}>
                {`${Math.floor(this.props.blueMission / 7 * 100)} %`}</h5>
            </div>
          </div>
          <div className="card-action">
            <LinearProgress
              min={0}
              max={7}
              mode="determinate"
              value={this.props.blueMission}
              color="rgb(0, 188, 212)"
            />
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