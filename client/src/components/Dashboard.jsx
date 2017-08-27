import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import QrReader from 'react-qr-reader';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';

import * as actions from '../actions';
import NPCCard from './ChatBot/NPCCard.jsx';
import MissionCard from './Mission/MissionCard.jsx';
import MissionBroadcast from './Mission/MissionBroadcast.jsx';
import ChatBotIcon from './ChatBot/ChatBotIcon.jsx';

/*
 * 這頁還在開發中 別太在意這麼多 code
 */

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 20,
      delay: 100,
      result: 'No fucking result',
    }; 
    this.handleScan = this.handleScan.bind(this);
    this.openImageDialog = this.openImageDialog.bind(this);
  }

  renderUser() {
    if (this.props.user) {
      return (
        <div>
          <h1>{this.props.user.name}</h1>
          <p>{this.props.user.email}</p>
        </div>
      );
    }
  }
  renderMission() {
    if (this.props.mission) {
      console.log(this.props.mission)
      return (
        <div>
          <h1>{this.props.mission.mId}</h1>
          <p>{this.props.mission.title}</p>
        </div>
      );
    }
  }
  handleScan(data) {
    let msg = data.split(',');
    this.setState({
      result: data,
    })
    this.props.doneMission('t01', msg[0], msg[1]);
  }
  handleError(err) {
    console.error(err)
  }
  openImageDialog() {
    this.refs.qrReader1.openImageDialog()
  }

  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    }
    return (
      <div>
        <Card className="container">
          <CardTitle
            title="記分板"
            subtitle="如果你看到這行文字代表身分已授權."
          />
          {/*<NPCCard />*/}
          <MissionBroadcast />

          <MissionCard />
          {/*this.props.secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.secretData}</CardText>*/}
          {/*this.props.room && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.room}</CardText>*/}
        </Card>
      </div>
    )
  }
}


function mapStateToProps({ secretData, room, user,team }) {
  return { secretData, room, user, team};
}

export default connect(mapStateToProps, actions)(Dashboard);
