/*
 * 大長老 NPC 元件， 不加入 Redux ，用 state 對話用客製元件回應
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import ChatBot, { Loading } from 'react-simple-chatbot';

import { elder_greet } from '../NPCLines/greetLine';
import { elder_dialog } from '../NPCLines/dialogLine';

import * as actions from '../../../actions';

// Chat bot theme
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

class ChatBotElder extends Component {
  constructor(props) {
    super(props);

    this.handleAddProgress = this.handleAddProgress.bind(this);
  }

  handleAddProgress(addNum) {
    this.props.addBlueProgress(addNum)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          cache
          cacheName="rsc_cache_elder"
          botDelay={300}
          customDelay={300}
          headerTitle="大長老"
          placeholder="說點什麼..."
          hideUserAvatar
          floating={true}
          steps={[{
              id: '1',
              message: elder_greet(),
              trigger: '2',
            }, {
              id: '2',
              user: true,
              trigger: ({ value, steps }) => elder_dialog(value)[1],
            }, {
              id: '3',
              message: ({ previousValue, steps }) => {
                { this.handleAddProgress(elder_dialog(previousValue)[2]) }
                return elder_dialog(previousValue)[0];
              },
              trigger: '2',
            }, {
              id: '4',
              message: '再見年輕人',
              end: true
            }
          ]}
        />
      </ThemeProvider>
    )
  }
}

export default connect(null, actions)(ChatBotElder);