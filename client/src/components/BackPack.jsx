import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import QrReader from 'react-qr-reader';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Chip from 'material-ui/Chip';
import * as actions from '../actions';


const inputWrapper= {
  position:'fixed',
  bottom:0,
  left: 0,
  width: '100%'
}
const money={
    width:'95%'
}



class BackPack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: 20,
            delay: 100,
            result:null,
        };
    }

   
    handleScan = (data) => {
        this.setState({
            result: data,
        })
        //如果不是ms開頭就給他錯誤
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
                <Chip 
                    labelStyle={{
                        width:'100%',
                        textAlign:'right',
                        paddingRight:'15px'
                    }}
                    style={money}>
                    <strong>{this.props.team.money}</strong> 元
                </Chip>
            );
        }else{
           return(
               <div>
                   <p>正在努力載入金額中</p>
               </div>
           );
        }
    }

    renderItem = () => {
        if (this.props.team) {
            return (
                <div className="row">
                    {this.props.team.items!==[]?
                    this.props.team.items.map((item)=>{
                        return(
                            <div style={{border:'1px solid black'}} className="col s3" key={Math.random()}>
                             <p>{item}</p>
                            </div>
                        )
                    })
                    :<p>空</p>}
                </div>
            );
        }else{
            return(
                <p>正在努力載入道具</p>
            );
        }
    }
    render() {
        const previewStyle = {
            height: '1px',
            width:'1px' ,
            marginLeft:'auto',
            marginRight:'auto'
        }
        return (
            <div>
                <div 
                    style={{
                        marginTop:'10px'
                    }}
                    className='container'>
                    {this.renderItem()}
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
                            <div className="col s3">
                                <input
                                    class="waves-effect waves-teal btn-flat"
                                    style={{
                                        backgroundColor:'white',
                                        backgroundImage:'none',
                                        borderStyle:'none',
                                        lineHeight:'45px',
                                        paddingLeft:'15px'
                                    }}
                                    type="button"
                                    value="加值金錢"
                                    onClick={this.openImageDialog}
                                />
                            </div>
                            <div
                             className="col s9"
                             style={{
                                 padding:'5px'
                             }}
                            >
                                {this.renderMoney()}
                            </div>
                        </div>
                    </Paper>
                    {/*this.state.result?<p>{this.state.result}</p>:null*/}
                </div>
            </div>
        )
    }
}


function mapStateToProps({ team }) {
    return { team };
}

export default connect(mapStateToProps, actions)(BackPack);
