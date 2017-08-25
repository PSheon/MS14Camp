import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import QrReader from 'react-qr-reader';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import * as actions from '../actions';
import RedMissionCard from './Mission/RedMissionCard.jsx';
import BlueMissionCard from './Mission/BlueMissionCard.jsx';
import YellowMissionCard from './Mission/YellowMissionCard.jsx';
import GreenMissionCard from './Mission/GreenMissionCard.jsx';
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
    this.handleClickElder = this.handleClickElder.bind(this);
    this.handleClickIsbs = this.handleClickIsbs.bind(this);
    this.handleClickWard = this.handleClickWard.bind(this);
    this.handleClickArch = this.handleClickArch.bind(this);
    this.handleClickCortana = this.handleClickCortana.bind(this);
    this.handleClickMystery = this.handleClickMystery.bind(this);
    this.handleClickWendez = this.handleClickWendez.bind(this);
    this.handleClickSeverus = this.handleClickSeverus.bind(this);
    this.handleClickOfeisi = this.handleClickOfeisi.bind(this);
  }
  handleClickElder() { this.props.setNpc('elder') }
  handleClickIsbs() { this.props.setNpc('isbs') }
  handleClickWard() { this.props.setNpc('ward') }
  handleClickArch() { this.props.setNpc('arch') }
  handleClickCortana() { this.props.setNpc('cortana') }
  handleClickMystery() { this.props.setNpc('mystery') }
  handleClickWendez() { this.props.setNpc('wendez') }
  handleClickSeverus() { this.props.setNpc('severus') }
  handleClickOfeisi() { this.props.setNpc('ofeisi') }


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

          <RaisedButton 
            label="換 大長老"
            icon={<ActionAndroid />} 
            primary={true} 
            onClick={this.handleClickElder} 
          />

          <RaisedButton
            label="換 艾斯霸斯"
            icon={<ActionAndroid />}
            primary={true}
            onClick={this.handleClickIsbs}
          />

          <RaisedButton
            label="換 沃德"
            icon={<ActionAndroid />}
            primary={true}
            onClick={this.handleClickWard}
          />

          <RaisedButton
            label="換 阿克"
            icon={<ActionAndroid />}
            primary={true}
            onClick={this.handleClickArch}
          />
          <RaisedButton
            label="換 柯塔娜"
            icon={<ActionAndroid />}
            primary={true}
            onClick={this.handleClickCortana}
          />
          <RaisedButton
            label="換 神秘人"
            icon={<ActionAndroid />}
            primary={true}
            onClick={this.handleClickMystery}
          />
          <RaisedButton
            label="換 溫德斯將軍之靈"
            icon={<ActionAndroid />}
            primary={true}
            onClick={this.handleClickWendez}
          />
          <RaisedButton
            label="換 瑟菲斯"
            icon={<ActionAndroid />}
            primary={true}
            onClick={this.handleClickSeverus}
          />
          <RaisedButton
            label="換 歐菲斯"
            icon={<ActionAndroid />}
            primary={true}
            onClick={this.handleClickOfeisi}
          />
          
          <RedMissionCard />
          <BlueMissionCard />
          <YellowMissionCard />
          <GreenMissionCard />
          {this.renderUser()}

          <QrReader
            ref="qrReader1"
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            legacyMode
          />
          <input type="button" value="Submit QR Code" onClick={this.openImageDialog} />
          <p>{this.state.result}</p>
          {this.renderMission()}
          
          {this.props.secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.secretData}</CardText>}
          {this.props.room && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.room}</CardText>}
          

        </Card>
        <ChatBotIcon />
      </div>
    )
  }
}


function mapStateToProps({ secretData, room, user, mission }) {
  return { secretData, room ,user , mission};
}

export default connect(mapStateToProps, actions)(Dashboard);
