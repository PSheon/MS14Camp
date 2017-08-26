import React, { Proptypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card';
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
      <Card className="container">
        <CardTitle
          title="象牙盾牌"
          subtitle={"任務已經完成百分之"+this.props.yellowMission+"了"}
        />

        <LinearProgress mode="determinate" value={this.props.yellowMission}
          style={{
            width: '100%',
            margin: '0 auto',
            border: '2px solid #765432',
            backgrondColor: '#546789'
          }}
        />

        <RaisedButton label="yellow" primary onClick={this.handleClick} />
      </Card>
    );
  };
};

function mapStateToProps({ yellowMission }) {
  return { yellowMission };
}

export default connect(mapStateToProps, actions)(YellowMissionCard);