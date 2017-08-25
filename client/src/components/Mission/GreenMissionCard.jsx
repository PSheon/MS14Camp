import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';

import * as actions from '../../actions';

class GreenMissionCard extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addGreenProcess(1);
  }

  render() {
    return (
      <Card className="container">
        <CardTitle
          title="翠綠寶劍"
          subtitle={"任務已經完成百分之"+this.props.greenMission+"了"}
        />

        <LinearProgress mode="determinate" value={this.props.greenMission}
          style={{
            width: '100%',
            margin: '0 auto',
            border: '2px solid #987321',
            backgroundColor: '#987654',
          }}
        />

        <RaisedButton label="green" primary onClick={this.handleClick} />

      </Card>
    );
  };
};

function mapStateToProps({ greenMission }) {
  return { greenMission };
}

export default connect(mapStateToProps, actions)(GreenMissionCard);