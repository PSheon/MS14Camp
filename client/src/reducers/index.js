import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import secretDataReducer from './secretDataReducer';
import redMissionReducer from './missions/redMissionReducer';
import blueMissionReducer from './missions/blueMissionReducer';
import greenMissionReducer from './missions/greenMissionReducer';
import yellowMissionReducer from './missions/yellowMissionReducer';
import npcReducer from './missions/npcReducer';
import roomReducer from './roomReducer';

export default combineReducers({
  redMission: redMissionReducer,
  blueMission: blueMissionReducer,
  greenMission: greenMissionReducer,
  yellowMission : yellowMissionReducer,
  npcName: npcReducer,
  secretData: secretDataReducer,
  room: roomReducer,
  form: reduxForm,
});