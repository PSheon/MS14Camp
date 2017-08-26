import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { Menu, MenuItem } from 'material-ui/Menu';
import { VelocityComponent } from 'velocity-react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

const drawer = {
    width: '0',
    height: '100vh',
    position: 'absolute',
    top: '0',
    zIndex: '1112'
};

const overlay = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    top: '0',
    zIndex: '1111'
};

export default class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideMenu: true
        }
    }
    _handleLinkClicked = () => {
        this.setState({ hideMenu: true });
        console.log(123);
    }
    _handleOnPress = () => {
        this.setState({ hideMenu: !this.state.hideMenu });
    }
    _handleTitleClicked=()=>{

    }

    _renderMenu = () => {
        if (this.state.hideMenu !== true) {
            return (
                <div>
                    <div style={overlay} onClick={this._handleLinkClicked} />
                    <VelocityComponent
                        animation={{ width: '70%' }}
                        duration={1000}>
                        <Paper zDepth={2} style={drawer} >
                            <IndexLink to="/">
                                <MenuItem primaryText="首頁" onClick={this._handleLinkClicked} />
                            </IndexLink>
                            <Divider />
                            {Auth.isUserAuthenticated() ? (
                                <Link to="/logout">
                                    <MenuItem primaryText="登出" onClick={this._handleLinkClicked} />
                                </Link>
                             
                            ) : (
                                    <div>
                                    <Link to="/login">
                                        <MenuItem primaryText="登入" onClick={this._handleLinkClicked} />
                                    </Link>
                                    <Divider />
                                    <Link to="/signup">
                                        <MenuItem primaryText="註冊" onClick={this._handleLinkClicked} />
                                    </Link>
                                    </div>
                                )}
                            <Divider />
                        </Paper>
                    </VelocityComponent>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <AppBar
                    title="微軟 14 領袖營"
                    onLeftIconButtonTouchTap={this._handleOnPress}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                {this._renderMenu()}
            </div>
        );
    }
}
