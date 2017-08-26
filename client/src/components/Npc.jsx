import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import QrReader from 'react-qr-reader';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import * as actions from '../actions';


class Npc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: 20,
            delay: 100,
            result: 'No fucking result',
        };
    }

    renderMission=()=> {
        if (this.props.mission) {
            let missionList=this.props.mission.missions;
            console.log(typeof missionList);

            return missionList.map((mission) => {
                return (
                    <div key={mission.mId}>
                    <h1>{mission.data.title}</h1>
                    <p>{mission.data.fromUs}:{mission.data.ourDetail}</p>
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
                <Card className="container">
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
                </Card>
            </div>
        )
    }
}


function mapStateToProps({ mission }) {
    return { mission };
}

export default connect(mapStateToProps, actions)(Npc);
