import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card';


class UrgentMissionCard extends Component {
  render() {
    return (
      <Card className="container">
        <CardTitle
          title="緊急任務"
          subtitle="跳一段舞"
        />
      </Card>
    );
  };
};

export default UrgentMissionCard;