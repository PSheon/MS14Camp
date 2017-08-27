import React, { PropTypes,Component} from 'react';
import { Link, IndexLink } from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionHome from 'material-ui/svg-icons/action/home';
import Settings from 'material-ui/svg-icons/action/settings';
import Headline from 'material-ui/svg-icons/action/view-headline';
import Basket from 'material-ui/svg-icons/action/shopping-basket';

import Auth from '../modules/Auth';
import NavBar from './navBar.jsx';



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
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo center">微軟14領袖營</a>
            </div>
          </nav>
        </div>
        { /* child component will be rendered here */}
        {this.props.children}
        <footer style={{ minHeight: '10vh' }}>     
        </footer>

        {Auth.isUserAuthenticated()?(
          <Paper zDepth={1} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <IndexLink to="/" >
              <BottomNavigationItem
                label="首頁"
                icon={<ActionHome color={this.state.selectedIndex === 0 ? '#00BCD4' :'#424242'}/>}
                onClick={() => this.select(0)}
              />
              </IndexLink>
              <Link to="/Npc">
              <BottomNavigationItem
                label="任務"
                icon={<Headline color={this.state.selectedIndex === 1 ? '#00BCD4' : '#424242'} />}
                onClick={() => this.select(1)}
              />
              </Link>
              <Link to="/backpack">
              <BottomNavigationItem
                label="背包"
                icon={<Basket color={this.state.selectedIndex === 2 ? '#00BCD4' : '#424242'} />}
                onClick={() => this.select(2)}
              />
              </Link>
              <Link to="/setting">
              <BottomNavigationItem
                label="設定"
                icon={<Settings color={this.state.selectedIndex === 3 ? '#00BCD4' : '#424242'} />}
                onClick={() => this.select(3)}
              />
              </Link>
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
