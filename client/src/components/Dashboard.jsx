import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import QrReader from 'react-qr-reader';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import * as actions from '../actions';
import Auth from '../modules/Auth';
import NPCCard from './ChatBot/NPCCard.jsx';
import MissionCard from './Mission/MissionCard.jsx';
import ChatBotIcon from './ChatBot/ChatBotIcon.jsx';


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.props.initTeamProgress(this.props.user.teamId);
    // this.props.getUserDetail(this.props.user.email);
    this.props.initUser(Auth.getUserEmailFromCookie(), () => {
      this.props.query(this.props.user.teamId);
    });
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
      return (
        <div>
          <h1>{this.props.mission.mId}</h1>
          <p>{this.props.mission.title}</p>
        </div>
      );
    }
  }
 

  render() {
    return (
      <div style={{
        padding:'10%',
        margin:'-10%',
        'backgroundColor':'#e7e7e7'
      }}>
          {/*<NPCCard />*/}
          <MissionCard />
          {/*this.props.secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.secretData}</CardText>*/}
          {/*this.props.room && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.room}</CardText>*/}
      </div>
    )
  }
}
const style = {
  dinosaur: {
    height: '40vh',
    width: '100vw',
    position: 'absolute',
    right: '50%',
    bottom: 0,
    transform: 'translate(50%, 0%)',
    verticalAlign: 'middle',
  }
}


function mapStateToProps({ secretData, room, user,team }) {
  return { secretData, room, user, team};
}

export default connect(mapStateToProps, actions)(Dashboard);
