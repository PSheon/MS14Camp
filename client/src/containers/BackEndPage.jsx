import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Auth from '../modules/Auth';
import * as actions from '../actions';
import BackEnd from '../components/BackEnd.jsx';


class BackEndPage extends Component {
    componentDidMount() {
        this.props.queryRoom();
        this.props.queryUser();
        this.props.queryMoney();
        this.props.queryTeam();
    }
    render() {

        return (<BackEnd/>);
    }

}

export default connect(null, actions)(BackEndPage);
