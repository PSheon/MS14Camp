/*
 *  這是彩蛋機器人，只在設定頁面出現，透過按住星星觸發
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import ChatBot, { Loading } from 'react-simple-chatbot';

import { chatbot_dialog } from './ChatBotLines/dialogLine';

// Chat bot theme
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Roboto',
  headerBgColor: '#ff5722',
  headerFontColor: '#fff',
  botBubbleColor: '#ff5722',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

class EasterEggChatBot extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          cache
          cacheName="rsc_cache_chatbot"
          botDelay={300}
          customDelay={300}
          headerTitle="被釋放的機器人"
          placeholder="說點什麼..."
          hideUserAvatar
          floating={true}
          steps={[{
            id: '1-1',
            message: '謝謝你勇者，你釋放了我，我會一直跟著你，直到永遠.....',
            trigger: '1-2'
          }, {
            id: '1-2',
            message: '你想知道我經歷過些什麼嗎？.....',
            trigger: '1-3'
          }, {
            id: '1-3',
            options: [
              { value: 1, label: '好啊', trigger: '1-4' },
              { value: 2, label: '才不呢', trigger: '1-5' },
            ],
          }, {
            id: '1-4',
            message: '我曾經也是台灣微軟的實習生，一天，我一如往常的加班，突然燈一暗，我就被困在這裡了.....',
            trigger: '1-5'
          }, {
            id: '1-5',
            message: '可怕的回憶',
            trigger: '1-6'
          }, {
            id: '1-6',
            message: '................................',
            trigger: '2-1'
          }, {
            id: '2-1',
            message: '你知道這個世界不是缺少美，而是缺少發現...就跟這個 APP 一樣',
            trigger: '2-2'
          }, {
            id: '2-2',
            user: true,
            trigger: ({ value, steps }) => chatbot_dialog(value)[1],
          }, {
            id: '2-3',
            message: ({ previousValue, steps }) => chatbot_dialog(previousValue)[0],
            trigger: '2-2'
          }, {
            id: '3-1',
            message: '再見了勇者！',
            end: true,
          }
          ]}
        />
      </ThemeProvider>
    );
  };
};

export default EasterEggChatBot;