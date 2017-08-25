/*
 * 柯塔娜 NPC 元件， 不加入 Redux ，用 state 對話用客製元件回應
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import ChatBot, { Loading } from 'react-simple-chatbot';

import { cortana_greet } from '../NPCLines/greetLine';
import { cortana_dialog } from '../NPCLines/dialogLine';

import * as actions from '../../../actions';

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


class ChatBotCortana extends Component {
  constructor(props) {
    super(props);

    this.handleAddProcess = this.handleAddProcess.bind(this);
  }

  handleAddProcess(addNum) {
    this.props.addBlueProcess(addNum)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          cache
          cacheName="rsc_cache_cortana"
          botDelay={300}
          customDelay={300}
          headerTitle="柯塔娜"
          placeholder="說點什麼..."
          hideUserAvatar
          floating={true}
          steps={[{
              id: '1',
              message: cortana_greet(),
              trigger: '2'
            }, {
              id: '2',
              user: true,
              trigger: ({ value, steps }) => cortana_dialog(value)[1],
            }, {
              id: '3',
              message: ({ previousValue, steps }) => {
                { this.handleAddProcess(cortana_dialog(previousValue)[2]) }
                return cortana_dialog(previousValue)[0];
              },
              trigger: '2'
            }, {
              id: '4',
              message: '再見！',
              end: true,
            }
          ]}
        />
      </ThemeProvider>
    );
  };
};

export default connect(null, actions)(ChatBotCortana);