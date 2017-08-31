import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Tappable from 'react-tappable';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Logout from 'material-ui/svg-icons/action/exit-to-app';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import EasterEggChatBot from './EasterEgg/ChatBot.jsx';

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatbotIsFound: false,
    }

    this.handlePressStar = this.handlePressStar.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('chatbotIsFound')) {
      this.setState({
        chatbotIsFound: true,
      })
    }
  }

  handlePressStar() {
    if (!localStorage.getItem('chatbotIsFound')) {
      Materialize.toast('是誰！！！', 3000);
      localStorage.setItem('chatbotIsFound', true);
    }
    this.setState({
      chatbotIsFound: true,
    })
  }

  render() {
    return (
      <div>
        <List>
          <ListItem primaryText="關於我們" leftIcon={<Tappable onPress={this.handlePressStar}><ActionGrade /></Tappable>} />
          
          <Divider />
          <Link to="/logout">
            <ListItem primaryText="登出" leftIcon={<Logout />} />
          </Link>
        </List>

        {this.state.chatbotIsFound && <EasterEggChatBot />}
      </div>
    );
  };
};
        
export default Setting;
