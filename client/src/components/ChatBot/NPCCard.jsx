/*
 * NPC Card 組件
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import * as actions from '../../actions';

class NPCCard extends Component {
  constructor(props) {
    super(props);

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



  render() {
    return (
      <Card className="container">
        <CardTitle
          title="NPC"
          subtitle="想找誰聊天呢?"
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

      </Card>
    );
  };
};

export default connect(null, actions)(NPCCard);