import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render(
  (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    </MuiThemeProvider>
  ), 
  document.getElementById('react-app')
);