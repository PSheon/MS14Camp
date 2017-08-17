import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import secretDataReducer from './secretDataReducer';
import roomReducer from './roomReducer';

export default combineReducers({
  secretData: secretDataReducer,
  room: roomReducer,
  form: reduxForm
});