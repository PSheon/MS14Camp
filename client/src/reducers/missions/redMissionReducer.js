import io from 'socket.io-client';
const socket = io();

import { SET_RED_TEAM_PROGRESS, ADD_RED_TEAM_PROGRESS, BROADCAST_RED_TEAM_PROGRESS } from '../../actions/types';

export default function (state = 0, action) {
  switch(action.type) {
    case SET_RED_TEAM_PROGRESS:
      return action.payload || 0;
    case ADD_RED_TEAM_PROGRESS:
      socket.emit('redProgress', { redProgress: state + action.payload });
      return state + action.payload;
    case BROADCAST_RED_TEAM_PROGRESS:
      socket.emit('redProgress', { redProgress: state + 1 });
      return state;
    default:
      return state;
  }
}