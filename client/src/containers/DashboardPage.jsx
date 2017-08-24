import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Dashboard from '../components/Dashboard.jsx';


class DashboardPage extends Component {

  /**
   * Class constructor.
   */
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     secretData: ''
  //   };
  // }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    // const xhr = new XMLHttpRequest();
    // xhr.open('get', '/api/dashboard');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // // set the authorization HTTP header
    // xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //     this.setState({
    //       secretData: xhr.response.message
    //     });
    //   }
    // });
    // xhr.send();
    this.props.setSecret();
    this.props.getRoom();
    this.props.setTeamProcess();
    
  }

  /**
   * Render the component.
   */
  render() {
    // return (<Dashboard secretData={this.props.dashboard} />);
    return (<Dashboard />);
  }

}

export default connect(null, actions)(DashboardPage);
