import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card'
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';

import * as actions from '../../actions';

class RedMissionCard extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addRedProcess(1);

  }

  render() {
    return (
      <Card className="container">
        <CardTitle
          title="勃根地酒紅頭盔"
          subtitle={"任務已經完成百分之" + this.props.redMission + "了"}
        />

        <LinearProgress mode="determinate" value={this.props.redMission} 
          style={{
            width: '100%',
            margin: '0 auto',
            border: '2px solid #FF9800',
            backgroundColor: '#D50000',
          }}
        />

      <RaisedButton label="red" primary={true} onClick={this.handleClick} />

      </Card>
    );
  };
};

function mapStateToProps({ redMission }) {
  return { redMission };
}

export default connect(mapStateToProps, actions)(RedMissionCard);