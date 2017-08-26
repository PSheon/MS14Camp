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
    backgroundColor: 'rgba(0,0,0,0.7)',
    color:'white'
}


class Npc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: 20,
            delay: 100,
            result: 'No fucking result'
        };
    }

    renderMission=()=> {
        if (this.props.team) {
            let missionList=this.props.team.missions;
            
            return missionList.map((mission) => {
                return (
                    <div key={mission.mId}>
                    <p>{mission.data.title}</p>
                    <div className="right-align" >
                        <p>{mission.data.fromUs}</p>
                        <p style={dialog}>{mission.data.ourDetail}</p>
                    </div>

                    <div className="right-left">
                        <p>{mission.data.fromBoss}</p>
                        <p style={dialog}>{mission.data.bossDetail}</p>
                    </div>

                    {mission.data.bossDetail2 ?
                     <div className="right-left">
                        <p>{mission.data.fromBoss}</p>
                        <p style={dialog}>{mission.data.bossDetail2}</p>
                    </div>:null}

                    {mission.data.getItem?
                        <p>獲得：{mission.data.getItem}</p>:
                        null
                    }
                    {mission.data.lostItem ?
                        <p>失去：{mission.data.lostItem}</p>:
                        null
                    }
                    
                    </div>
                );
            });
           
        }
    }
    handleScan=(data)=> {
        let msg = data.split(',');
        this.setState({
            result: data,
        })
        this.props.doneMission('t01', msg[0], msg[1]);
    }
    handleError=(err)=> {
        console.error(err)
    }
    openImageDialog=()=> {
        this.refs.qrReader1.openImageDialog()
    }




    render() {
        const previewStyle = {
            height: 240,
            width: 320,
        }
        return (
            <div>
                <div className='container'>
                {this.renderMission()}
                <QrReader
                        ref="qrReader1"
                        delay={this.state.delay}
                        style={previewStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        legacyMode
                />
                <input type="button" value="Submit QR Code" onClick={this.openImageDialog} />
                <p>{this.state.result}</p>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ team }) {
    return { team };
}

export default connect(mapStateToProps, actions)(Npc);
