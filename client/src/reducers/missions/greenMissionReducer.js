import io from 'socket.io-client';
const socket = io();

import { SET_GREEN_TEAM_PROCESS, ADD_GREEN_TEAM_PROCESS } from '../../actions/types';

export default function (state = 0, action) {
  switch (action.type) {
    case SET_GREEN_TEAM_PROCESS:
      return action.payload || '';
    case ADD_GREEN_TEAM_PROCESS:
      socket.emit('greenProcess', { greenProcess: state + action.payload });
      return state + action.payload;
    default:
      return state;
  }
}