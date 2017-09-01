import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Auth from '../modules/Auth';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
//import injectTapEventPlugin from 'react-tap-event-plugin';

let height = window.screen.height;
let weight = window.screen.weight;

class lotsResultPage extends Component {
  constructor(prop) {
    super(prop); 
    this.state = {
      expanded: true,
    };
  }
  componentDidMount() {
    this.props.initUser(Auth.getUserEmailFromCookie(), () => {
      this.props.getRoom(this.props.user.email);
    });
    localStorage.setItem('ms_user_room_is_choice', true);
  }
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
    };

  handleToggle = (event, toggle) => {
      this.setState({expanded: toggle});
    };

  handleExpand = () => {
      this.setState({expanded: true});
    };

  handleReduce = () => {
      this.setState({expanded: false});
  };
  renderCard=()=>{
    if(this.props.room){
      let members = this.props.room.member;
        return members.map((member) => {
          return (
           
          <Chip key={member.name}
                onRequestDelete={this.handleRequestDelete}
              >
                <Avatar src="https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/master/寶哥.jpg" />
                {member.name}
          </Chip>
            
          )
        });
    }
  }

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.user.name}
          subtitle={this.props.user.tId}
          avatar="https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/master/York.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="我們的主場" subtitle="2017台北世大運" />}
        >
          <img src="https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/master/20881922_1549813065064725_7654877585521587816_n.jpg" alt="" />
        </CardMedia>
        <CardTitle title={this.props.user.name} subtitle={this.props.room ? `${this.props.room.id}號房` :`正在努力幫你挑房間`} expandable={true} />
        <CardText expandable={true}>
          {this.props.room ? 
            `您的房間在第三棟，${this.props.room.id}房寢室，你的室友如下:`:`正在努力幫你挑房間`}
        {this.renderCard()}
        </CardText>
        <CardActions>
          <FlatButton label="打開房卡" onClick={this.handleExpand} />
          <FlatButton label="關閉房卡" onClick={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps({ room, user }) {
  return { room, user};
}
export default connect(mapStateToProps, actions)(lotsResultPage);
// export default connect(mapStateToProp,{
//   userInfoAction:actions.userInfo,
// })(landingPage)