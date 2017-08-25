import io from 'socket.io-client';
const socket = io();

import { SET_BLUE_TEAM_PROCESS, ADD_BLUE_TEAM_PROCESS } from '../../actions/types';

export default function (state = 0, action) {
  switch (action.type) {
    case SET_BLUE_TEAM_PROCESS:
      return action.payload || '';
    case ADD_BLUE_TEAM_PROCESS:
      socket.emit('blueProcess', { blueProcess: state + action.payload });
      return state + action.payload;
    default:
      return state;
  }
}