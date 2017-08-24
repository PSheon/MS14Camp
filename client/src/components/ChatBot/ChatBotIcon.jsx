/*
 * 控制所有 NPC 的 Redux 元件
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import ChatBotElder from './NPC/ChatBotElder.jsx';
import ChatBotIsbs from './NPC/ChatBotIsbs.jsx';
import ChatBotWard from './NPC/ChatBotWard.jsx';
import ChatBotArch from './NPC/ChatBotArch.jsx';
import ChatBotCortana from './NPC/ChatBotCortana.jsx';
import ChatBotMystery from './NPC/ChatBotMystery.jsx';
import ChatBotWendez from './NPC/ChatBotWendez.jsx';
import ChatBotSeverus from './NPC/ChatBotSeverus.jsx';
import ChatBotOfeisi from './NPC/ChatBotOfeisi.jsx';

class ChatBotIcon extends Component {
  renderChatBot() {
    switch (this.props.npcName) {
      case 'elder':
        return <ChatBotElder />;
      case 'isbs':
        return <ChatBotIsbs />;
      case 'ward':
        return <ChatBotWard />;
      case 'arch':
        return <ChatBotArch />;
      case 'cortana':
        return <ChatBotCortana />;
      case 'mystery':
        return <ChatBotMystery />;
      case 'wendez':
        return <ChatBotWendez />;
      case 'severus':
        return <ChatBotSeverus />;
      case 'ofeisi':
        return <ChatBotOfeisi />;
      default:
        return <ChatBotElder />
    }
  }

  render() {
    return (
      <div>
        {this.renderChatBot()}
      </div>
    );
  };
};

function mapStateToProps({ npcName }) {
  return { npcName };
}

export default connect(mapStateToProps)(ChatBotIcon);