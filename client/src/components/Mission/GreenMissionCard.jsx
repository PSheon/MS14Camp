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
        <div className="card teal lighten-3">
          <div className="card-content white-text">
            <span className="card-title">翠綠寶劍</span>
            <p>{"任務已經完成百分之" + Math.floor(this.props.greenMission / 12 * 100) + "了"}</p>
          </div>
          <div className="card-action">
            <LinearProgress
              min={0}
              max={12}
              mode="determinate"
              value={this.props.greenMission}
              color="#43A047"
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