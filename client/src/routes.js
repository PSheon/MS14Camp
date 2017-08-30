import moment from 'moment';

import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import NpcPage from './containers/NpcPage.jsx';
import BackPackPage from './containers/BackpackPage.jsx';
import SettingPage from './containers/SettingPage.jsx';
import Auth from './modules/Auth';
import ShowRoom from './components/ShowRoom.jsx';
import GetRoom from './components/GetRoom.jsx';
import keys from '../../config/keys';

const gameDay = moment(keys.gameDay, "YYYYMMDD").format('ll')
const today = moment.utc().format('ll')

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          if (today !== gameDay) {
            callback(null, GetRoom);
          }
          callback(null, DashboardPage);
        } else {
          callback(null, SignUpPage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();
        Auth.removeUserNameFromCookie();
        Auth.removeUserEmailFromCookie();

        // change the current URL to /
        replace('/');
      }
    },
    {
      path: '/npc',
      component: NpcPage
    },
    {
      path: '/backpack',
      component: BackPackPage
    },
    {
      path: '/setting',
      component: SettingPage
    },
    {
      path: '/showroom',
      component: ShowRoom
    }
  ]
};

export default routes;
