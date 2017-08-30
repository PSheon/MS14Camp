import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';

import * as actions from '../../actions';

class RedMissionCard extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addRedProgress(1);

  }

  render() {
    return (
      <div className="col s12 m6">
        <div className="card  lighten-3">
          <div className="card-content">
            <div className="row" style={{margin: 0 }}>
              <span className="card-title">
              <img style={{height:'25px',paddingRight:'15px',paddingTop:'5px'}} 
                   src={"https://firebasestorage.googleapis.com/v0/b/msseed14th.appspot.com/o/logo_helmet.svg?alt=media&token=6e85f8ed-1f6c-47bf-9dc2-5b9ab86f499e"}
              />勃根地酒紅頭盔</span>
              <p className="col s8 m8"
                style={{padding: 0}}>目前進度</p>
            <h5 className="col s4 m4" 
                style={{
                  margin:0,
                  padding:0,
                  color:'#ee6e73',
                  textAlign:'right'
            }}>{`${Math.floor(this.props.redMission / 10 * 100)} %`}</h5>
            </div>
          </div>
          <div className="card-action">
            <LinearProgress
              min={0}
              max={10}
              mode="determinate"
              value={this.props.redMission}
              color="#ee6e73"
            />
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ redMission }) {
  return { redMission };
}

export default connect(mapStateToProps, actions)(RedMissionCard);