import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Auth from '../modules/Auth';
import * as actions from '../actions';
import Backpack from '../components/Backpack.jsx';


class BackPackPage extends Component {
    componentDidMount() {
        this.props.query('t01');
        this.props.setUser({ name: Auth.getUserNameFromCookie(), email: Auth.getUserEmailFromCookie() });
        //get money
        //set money add minus
        //get item
        //set item add minus
    }
    render() {

        return (<Backpack/>);
    }

}

export default connect(null, actions)(BackPackPage);
