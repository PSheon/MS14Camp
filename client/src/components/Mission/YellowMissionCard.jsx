import React, { Proptypes, Component } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';

import * as actions from '../../actions';

class YellowMissionCard extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addYellowProgress(1);
    
  }

  render() {
    return (
      <div className="col s12 m6">
        <div className="card lighten-3">
          <div className="card-content">
            <div className="row" style={{ margin: 0 }}>
            <span className="card-title">
                <img style={{ height: '25px', paddingRight: '15px', paddingTop: '5px' }}
                  src={"https://firebasestorage.googleapis.com/v0/b/msseed14th.appspot.com/o/logo_shield.svg?alt=media&token=68b61170-d4ab-4ab2-bb02-15f18f3af120"}
              />
            象牙盾牌</span>
            <p className="col s8 m8"
              style={{ padding: 0 }}>目前進度</p>
            <h5 className="col s4 m4"
              style={{
                margin: 0,
                padding: 0,
                textAlign: 'right',
                color:'#F9A825'
              }}>{`${Math.floor(this.props.yellowMission / 10 * 100)} %`}</h5>
          </div>
          </div>
          <div className="card-action">
            <LinearProgress
              min={0}
              max={9}
              mode="determinate"
              value={this.props.yellowMission}
              color="#F9A825"
            />
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ yellowMission }) {
  return { yellowMission };
}

export default connect(mapStateToProps, actions)(YellowMissionCard);