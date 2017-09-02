import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';

import * as actions from '../../actions';

class GreenMissionCard extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addGreenProgress(1);
    
  }

  render() {
    return (
      <div className="col s12 m6">
        <div className="card lighten-3">
          <div className="card-content">
            <div className="row" style={{ margin: 0 }}>
              <span className="card-title">
                <img style={{ height: '25px', paddingRight: '15px', paddingTop: '5px'}}
                  src={"https://firebasestorage.googleapis.com/v0/b/msseed14th.appspot.com/o/logo_sword.svg?alt=media&token=fbd06ce5-09ec-4707-babd-3ae324224962"}
              />
              翠綠寶劍</span>
              <p className="col s8 m8"
                style={{ padding: 0 }}>目前進度</p>
              <h5 className="col s4 m4"
                style={{
                  margin: 0,
                  padding: 0,
                  textAlign: 'right',
                  color:'#7CB342'
                }}>{`${Math.floor(this.props.greenMission / 12 * 100)} %`}</h5>
            </div>
          </div>
          <div className="card-action">
            <LinearProgress
              min={0}
              max={12}
              mode="determinate"
              value={this.props.greenMission}
              color="#7CB342"
            />
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ greenMission }) {
  return { greenMission };
}

export default connect(mapStateToProps, actions)(GreenMissionCard);