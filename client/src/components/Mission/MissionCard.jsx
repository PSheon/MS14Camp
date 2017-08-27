import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card'

import * as actions from '../../actions';
import RedMissionCard from './RedMissionCard.jsx';
import BlueMissionCard from './BlueMissionCard.jsx';
import YellowMissionCard from './YellowMissionCard.jsx';
import GreenMissionCard from './GreenMissionCard.jsx';

class MissionCard extends Component {


  render() {
    return (
      <div className="row">
        <RedMissionCard />
        <BlueMissionCard />
        <YellowMissionCard />
        <GreenMissionCard />
      </div>
    );
  };
};

export default connect(null, actions)(MissionCard);