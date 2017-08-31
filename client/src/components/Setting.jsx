import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Dialog from 'material-ui/Dialog';
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
      open: false,
    }

    this.handlePressStar = this.handlePressStar.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('chatbotIsFound')) {
      this.setState({
        chatbotIsFound: true,
      })
    }
  }

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

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
        <Dialog
          title="阿低斯戰隊"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <div className="row">

            <div className="col s12 m8 offset-m2 l6 offset-l3">
              <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <img src="http://www.therangerproject.com/wp-content/uploads/2015/06/mmprtm.jpg" alt="" className="responsive-img" />
                  </div>
                </div>
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <span className="black-text">
                      阿滴斯戰隊的由來是因為成員都是 RDAA ，小學老師有說過任何東西的複數都要加上s，三位成員都沒有忘記老師的話，所以戰隊就叫做 RDs 英文念作阿低斯 .... ( 吧？，目前戰隊穩定缺人中 ...
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m8 offset-m2 l6 offset-l3">
              <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <img src="data:image/jpeg;base64,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" alt="" className="circle responsive-img" />
                  </div>
                </div>
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <span className="black-text">
                      和平和正義是他的理想，散撥愛與歡樂是日常，阿低斯戰隊的老大-紅戰士，為人低調，平常以趙子榮的形象出現在大家面前
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m8 offset-m2 l6 offset-l3">
              <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <img src="https://s-media-cache-ak0.pinimg.com/originals/91/24/f3/9124f3caa942575320124c01cdbdb236.jpg" alt="" className="circle responsive-img" />
                  </div>
                </div>
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <span className="black-text">
                      阿低斯戰隊的小羅摟1號，跟著老大紅戰士一齊維護世界和平，因為最近case少了，體重殘會直線上升，平常以寶哥的形象出現在大家面前
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m8 offset-m2 l6 offset-l3">
              <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <img src="https://s-media-cache-ak0.pinimg.com/736x/03/cc/1d/03cc1dd310e989bac7ee5c5fe55c33f7--iron-man-suit-so-funny.jpg" alt="" className="circle responsive-img" />
                  </div>
                </div>
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <span className="black-text">
                      阿低斯戰隊的小羅摟2號，一心想做好事的邊緣阿宅，也是想成為超級英雄的人的錯誤示範，平常以Paul的形象出現在大家面前
                    </span>
                  </div>
                </div>
              </div>
            </div>
              
          </div>
        </Dialog>

        <List>
          <ListItem leftIcon={<Tappable onPress={this.handlePressStar}><ActionGrade /></Tappable>} 
            primaryText="關於我們"
            onClick={this.handleOpen}
          />
          
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
