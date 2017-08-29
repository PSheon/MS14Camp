import io from 'socket.io-client';
const socket = io();

import { SET_GREEN_TEAM_PROGRESS, ADD_GREEN_TEAM_PROGRESS, BROADCAST_GREEN_TEAM_PROGRESS } from '../../actions/types';

export default function (state = 0, action) {
  switch (action.type) {
    case SET_GREEN_TEAM_PROGRESS:
      return action.payload || 0;
    case ADD_GREEN_TEAM_PROGRESS:
      socket.emit('greenProgress', { greenProgress: state + action.payload });
      return state + action.payload;
    case BROADCAST_GREEN_TEAM_PROGRESS:
      socket.emit('greenProgress', { greenProgress: state + 1 });
      return state;
    default:
      return state;
  }
}