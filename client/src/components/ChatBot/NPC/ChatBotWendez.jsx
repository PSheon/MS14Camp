/*
 * 溫德斯將軍之靈 NPC 元件， 不加入 Redux ，用 state 對話用客製元件回應
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import ChatBot, { Loading } from 'react-simple-chatbot';

import { wendez_greet } from '../NPCLines/greetLine';
import { wendez_dialog } from '../NPCLines/dialogLine';

// Chat bot theme
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#ff5722',
  headerFontColor: '#fff',
  botBubbleColor: '#ff5722',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: wendez_greet(),
    trigger: '2'
  }, {
    id: '2',
    user: true,
    trigger: '3'
  }, {
    id: '3',
    message: ({ previousValue, steps }) => wendez_dialog(previousValue),
    trigger: '4'
  }, {
    id: '4',
    options: [
      { value: 1, label: '恩...等等', trigger: '1' },
      { value: 2, label: '沒事了', trigger: '5' },
    ],
  }, {
    id: '5',
    message: '再見！',
    end: true,
  }
];

class ChatBotWendez extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="溫德斯將軍之靈"
          placeholder="說點什麼..."
          hideUserAvatar
          floating={true}
          steps={steps}
        />
      </ThemeProvider>
    );
  };
};

export default ChatBotWendez;