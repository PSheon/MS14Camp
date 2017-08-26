import React, { PropTypes,Component} from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import NavBar from './navbar';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionHome from 'material-ui/svg-icons/action/home';
import Settings from 'material-ui/svg-icons/action/settings';
import Headline from 'material-ui/svg-icons/action/view-headline';
import Basket from 'material-ui/svg-icons/action/shopping-basket';
const nearbyIcon = <IconLocationOn />;
const home = <ActionHome />;
const setting = <Settings/>;
const headline = <Headline />;
const basket = <Basket />;


class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  select = (index) => this.setState({ selectedIndex: index });
  render(){
    return (
      <div>
        {/*<div className="top-bar">
          <div className="top-bar-left">
            <IndexLink to="/">微軟 14 領袖營</IndexLink>
          </div>

          {Auth.isUserAuthenticated() ? (
            <div className="top-bar-right">
              <Link to="/Npc">任務頁</Link>
              <Link to="/backpack">背包</Link>
              <Link to="/logout">登出</Link>
            </div>
          ) : (
              <div className="top-bar-right">
                <Link to="/login">登入</Link>
                <Link to="/signup">註冊</Link>
              </div>
            )}
          </div>*/}
        { /* child component will be rendered here */}
        {this.props.children}
        {Auth.isUserAuthenticated()?(
          <Paper zDepth={1} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <IndexLink to="/" >
              <BottomNavigationItem
                label="首頁"
                icon={home}
              />
              </IndexLink>
              <Link to="/Npc">
              <BottomNavigationItem
                label="任務"
                icon={headline}
              />
              </Link>
              <Link to="/backpack">
              <BottomNavigationItem
                label="背包"
                icon={basket}
              />
              </Link>

              <BottomNavigationItem
                label="設定"
                icon={setting}
              />
            </BottomNavigation>
          </Paper>
        ):null}
      </div>
    );
  }

}

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
