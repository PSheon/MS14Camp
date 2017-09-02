import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Dialog from 'material-ui/Dialog';
import Tappable from 'react-tappable';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Logout from 'material-ui/svg-icons/action/exit-to-app';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import EasterEggChatBot from './EasterEgg/ChatBot.jsx';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

class About extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <h3>微軟新精神 im</h3>
                        <div className="card-panel grey lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s12">
                                    <h3>Passion</h3>
                                </div>
                            </div>
                            <div className="row valign-wrapper">
                                <div className="col s12">
                                    <span className="black-text">
                                        for our work, our customers and our partners
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <div className="card-panel grey lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s12">
                                    <h3>Aspiration </h3>
                                </div>
                            </div>
                            <div className="row valign-wrapper">
                                <div className="col s12">
                                    <span className="black-text"> 
                                    to achieve more for Taiwan, for Microsoft and for ourselves
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <div className="card-panel grey lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s12">
                                    <h3>Collaboration</h3>
                                </div>
                            </div>
                            <div className="row valign-wrapper">
                                <div className="col s12">
                                    <span className="black-text">
                                      at the heart of the new model, orchestration across scenarios
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <div className="card-panel grey lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s12">
                                    <h3>Trust</h3>
                                </div>
                            </div>
                            <div className="row valign-wrapper">
                                <div className="col s12">
                                    <span className="black-text">
                                        each other and build trust across the organization
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};


export default About;
