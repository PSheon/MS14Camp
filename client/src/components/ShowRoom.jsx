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
import SvgIconFace from 'material-ui/svg-icons/action/face';
import Divider from 'material-ui/Divider';

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
  }
  renderCard=()=>{
    if(this.props.room){
      let members = this.props.room.member;
        return members.map((member) => {
          return (
           
          <Chip key={member.name}
                style={{marginTop:'10px'}}
                onRequestDelete={this.handleRequestDelete}
              >
              <Avatar color="#444" icon={<SvgIconFace />} />
                {member.name}
          </Chip>
            
          )
        });
    }
  }

  render() {
    return (
      <Card expanded={this.state.expanded} style={{height:'90vh'}}>
        <CardTitle title={this.props.user.name} subtitle={this.props.room ? `${this.props.room.id}號房` :`正在努力幫你挑房間`} expandable={true} />
        <Divider />
        <CardText expandable={true}>
          {this.props.room ? 
            `您的房間在${this.props.room.id}房寢室，你的室友如下:`:`正在努力幫你挑房間`}
        {this.renderCard()}
        </CardText>
      </Card>
    );
  }
}

function mapStateToProps({ room, user }) {
  return { room, user};
}
export default connect(mapStateToProps, actions)(lotsResultPage);