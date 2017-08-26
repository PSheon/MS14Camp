import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Auth from '../modules/Auth';
import * as actions from '../actions';
import Npc from '../components/Npc/Npc.jsx';


class NpcPage extends Component {
    componentDidMount() {
        this.props.setSecret();
        this.props.getRoom();
        this.props.getMission('t01');
        this.props.setUser({ name: Auth.getUserNameFromCookie(), email: Auth.getUserEmailFromCookie() });
    }
    render() {

        return (<Npc />);
    }

}

export default connect(null, actions)(NpcPage);
