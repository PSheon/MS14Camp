import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import QrReader from 'react-qr-reader';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import * as actions from '../actions';

const dialog = {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white'
}


class BackPack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: 20,
            delay: 100,
            result: 'No fucking result',
        };
    }

   
    handleScan = (data) => {
        this.setState({
            result: data,
        })
        this.props.doMoney('t01',data,'add');
    }
    handleError = (err) => {
        console.error(err)
    }
    openImageDialog = () => {
        this.refs.qrReader1.openImageDialog()
    }
    renderMoney=()=>{
        if(this.props.team){
            return(
                <div>
                    <p>{this.props.team.money}</p>
                </div>
            );
        }
    }

    renderItem = () => {
        if (this.props.team) {
            return (
                <div>
                    <p>{this.props.team.items?'滿':'空'}</p>
                </div>
            );
        }
    }
    render() {
        const previewStyle = {
            height: 240,
            width: 320,
        }
        return (
            <div>
                <div className='container'>
                    {this.renderMoney()}
                    {this.renderItem()}
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

export default connect(mapStateToProps, actions)(BackPack);
