import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import QrReader from 'react-qr-reader';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import * as actions from '../../actions';

const dialog={
    margin: '0px',
    borderRadius: '10px',
    padding: '10px',
    lineHeight:'1.7',
    fontWeight:'500'
}
const inputWrapper = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%'
}
const people={
    margin:'5px',
    color: '#424242'
}
const fromUs={
    backgroundColor: '#C5E1A5',
    color: '#424242',
    margin: '0px',
    borderRadius: '10px',
    padding: '10px',
    lineHeight: '1.7',
    fontWeight: 'normal',
    marginBottom:'15px'
}
const fromBoss = {
    backgroundColor: '#E0E0E0',
    color: '#424242',
    margin: '0px',
    borderRadius: '10px',
    padding: '10px',
    lineHeight: '1.7',
    fontWeight: 'normal',
    marginBottom: '15px'
}


class Npc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        completed: 20,
        delay: 100,
        result: '沒有結果，就像台灣薪資問題'
      };
    }
    
    componentDidMount() {
      // this.props.getUserDetail(this.props.user.email);
      this.props.query(this.props.user.teamId);
    }

    renderMission = () => {
        if (this.props.team) {
            let missionList=this.props.team.missions;
            
            return missionList.map((mission) => {
                return (
                    <div key={mission.mId}>
                    <div className="right-align" >
                        <p style={people}>{mission.data.fromUs}</p>
                        <p style={fromUs}>{mission.data.ourDetail}</p>
                    </div>

                    <div className="right-left">
                        <p style={people}>{mission.data.fromBoss}</p>
                        <p style={fromBoss}>{mission.data.bossDetail}</p>
                    </div>

                    {mission.data.bossDetail2 ?
                    <div className="right-left">
                        <p style={fromBoss}>{mission.data.bossDetail2}</p>
                    </div>:null}

                    {mission.data.getItem?
                        <p>獲得：{mission.data.getItem}</p>:
                        null
                    }
                    {mission.data.lostItem ?
                        <p>失去：{mission.data.lostItem}</p>:
                        null
                    }
                    {mission.isSuccess?
                        <p>獲得：{mission.data.success || 0}元</p> :<p>獲得：{mission.data.failed || 0}元</p>
                    }
                    {mission.data.paid !== "0"?
                        <p>付出：{mission.data.paid || 0}元</p> :
                        null
                    }
                    
                    </div>
                );
            });
           
        }
    }
    handleScan=(data)=> {
        this.setState({
          result: data,
        });
        
        
        if(data){
          let valid = data.charAt(0);
          if (valid !== 'M') {
            let msg = data.split(',');
            this.props.doneMission(this.props.user.teamId, msg[0], msg[1]);
          }
        }else{
          alert(`invalid QR`);
        }
      
    }
    handleError=(err)=> {
      console.error(err)
    }
    openImageDialog=()=> {
      this.refs.qrReader1.openImageDialog();
    }




    render() {
        const previewStyle = {
          height: '1px',
          width: '1px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }
        return (
            <div>
                <div>
                <div style={{ paddingTop: '15px', paddingBottom: '40px' }}>
                {this.renderMission()}
                </div>

                {/*<p>{this.state.result}</p>*/}
                <QrReader
                    ref="qrReader1"
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    legacyMode
                />
                <Paper style={inputWrapper}>
                    <div className="row"
                        style={{
                            marginBottom: '55px',
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            lineHeight: '0'
                        }}>
                        <div className="center-align">
                            <input
                                className="waves-effect waves-teal btn-flat"
                                style={{
                                    backgroundColor: 'white',
                                    backgroundImage: 'none',
                                    borderStyle: 'none',
                                }}
                                type="button"
                                value="儲存進度"
                                onClick={this.openImageDialog}
                            />
                        </div>
                    </div>
                </Paper>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ team, user }) {
  return { team, user };
}

export default connect(mapStateToProps, actions)(Npc);
