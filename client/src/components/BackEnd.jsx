import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import QrReader from 'react-qr-reader';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import ActionHome from 'material-ui/svg-icons/action/home';
import * as actions from '../actions';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import SvgIconMoney from 'material-ui/svg-icons/editor/attach-money';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';


class BackEnd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 'no result'
        };
    }


    handleScan = (data) => {
        this.setState({
            result: data,
        })
        //如果不是ms開頭就給他錯誤
        if (data) {
            let valid = data.charAt(0);
            if (valid === 'M') {
                this.props.doMoney(this.props.user.teamId, data, 'add');
            }
        } else {
            alert(`invalid QR`);
        }

    }
    handleError = (err) => {
        console.error(err)
    }
    openImageDialog = () => {
        this.refs.qrReader1.openImageDialog()
    }
    renderUser=()=>{
        if(this.props.god){
          return this.props.god.user.map((userInfo)=>{
            return(
                <Chip key={userInfo.name}
                    style={{ marginTop: '10px' }}
                    onRequestDelete={this.handleRequestDelete}
                >
                    <Avatar color="#444" icon={<SvgIconFace />} />
                    {userInfo.name}
                </Chip>
            );
          })
        }
    }
    renderRoom = () => {
        if (this.props.god) {
            return this.props.god.room.map((roomInfo) => {
                return (
                    <Chip key={roomInfo.id}
                        style={{ marginTop: '10px' }}
                        onRequestDelete={this.handleRequestDelete}
                    >
                        <Avatar color="#444" icon={<ActionHome />} />
                        {roomInfo.name}{roomInfo.id}
                    </Chip>
                );
            })
        }
    }
    renderMoney=()=>{
        if(this.props.god){
            return(
                <Chip
                    style={{ marginTop: '10px' }}
                    onRequestDelete={this.handleRequestDelete}
                >
                    <Avatar color="#444" icon={<SvgIconMoney />} />
                    {this.props.god.moeny.length||0}張序號已生成
                </Chip>
            );
        } 
    }

    renderTeam = () => {
        if (this.props.god) {
            return (
                <Chip
                    style={{ marginTop: '10px' }}
                    onRequestDelete={this.handleRequestDelete}
                >
                    <Avatar color="#444" icon={<SvgIconFace />} />
                    {this.props.god.team.length}隊已生成
                </Chip>
            );
        }
    }

    renderUserAmt = () => {
        if (this.props.god) {
            return (
                <Chip
                    style={{ marginTop: '10px' }}
                    onRequestDelete={this.handleRequestDelete}
                >
                    <Avatar color="#444" icon={<SvgIconFace />} />
                    {this.props.god.user.length}人已註冊
                </Chip>
            );
        }
    }


    renderRoomAmt = () => {
        if (this.props.god) {
            return (
                <Chip
                    style={{ marginTop: '10px' }}
                    onRequestDelete={this.handleRequestDelete}
                >
                    <Avatar color="#444" icon={<ActionHome />} />
                    {this.props.god.room.length}房已抽籤
                </Chip>
            );
        }
    }

    render() {
        const previewStyle = {
            height: '1px',
            width: '1px',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
        return (
            <div style={{
                marginTop:'10px',
                marginBottom:'10vh'
            }}>    
                <Card>
                    <CardHeader
                        title="已登入使用者"
                        subtitle={this.renderUserAmt()}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardActions>
                        <FlatButton label="刪除全部使用者" onClick={this.props.delUser}/>
                    </CardActions>
                    <CardText expandable={true}>
                        {this.renderUser()}
                    </CardText>
                </Card>

                <Card>
                    <CardHeader
                        title="抽籤結果"
                        subtitle={this.renderRoomAmt()}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardActions>
                        <FlatButton label="刪除抽籤結果" onClick={this.props.delRoom} />
                        <FlatButton label="抽房間" onClick={this.props.makeRoom} />
                    </CardActions>
                    <CardText expandable={true}>
                        {this.renderRoom()}
                    </CardText>
                </Card>
                
                <Card>
                    <CardHeader
                        title="金錢"
                        subtitle={this.renderMoney()}
                        actAsExpander={true}
                        showExpandableButton={false}
                    />
                    <CardActions>
                        <FlatButton label="刪除金幣" onClick={this.props.delMoney}  />
                        <FlatButton label="大撒幣啦" onClick={this.props.addMoney}/>
                    </CardActions>
                </Card>

                <Card>
                    <CardHeader
                        title="隊伍"
                        subtitle={this.renderTeam()}
                        actAsExpander={true}
                        showExpandableButton={false}
                    />
                    <CardActions>
                        <FlatButton label="刪除全部隊伍" onClick={this.props.delTeam} />
                        <FlatButton label="初始化全部隊伍" onClick={this.props.initTeam}  />
                    </CardActions>
                </Card>
            </div>
        )
    }
}


function mapStateToProps({ team, user,god }) {
    return { team, user,god };
}

export default connect(mapStateToProps, actions)(BackEnd);
