import io from 'socket.io-client';
const socket = io();

import { SET_RED_TEAM_PROCESS, ADD_RED_TEAM_PROCESS } from '../../actions/types';

export default function (state = 0, action) {
  switch(action.type) {
    case SET_RED_TEAM_PROCESS:
      return action.payload || '';
    case ADD_RED_TEAM_PROCESS:
      socket.emit('redProcess', { redProcess: state + action.payload });
      return state + action.payload;
    default:
      return state;
  }
}