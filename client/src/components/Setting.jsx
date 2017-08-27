import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';

import * as actions from '../actions';

class Setting extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div clasName="container">
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card-panel teal">
            <span className="white-text">
              你好啊~{ this.props.user.name }

              <Link to="/logout">登出</Link>
            </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(Setting);