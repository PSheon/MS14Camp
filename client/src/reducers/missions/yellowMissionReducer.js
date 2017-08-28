import io from 'socket.io-client';
const socket = io();

import { SET_YELLOW_TEAM_PROGRESS, ADD_YELLOW_TEAM_PROGRESS } from '../../actions/types';

export default function (state = 0, action) {
  switch (action.type) {
    case SET_YELLOW_TEAM_PROGRESS:
      return action.payload || 0;
    case ADD_YELLOW_TEAM_PROGRESS:
      socket.emit('yellowProgress', { yellowProgress: state + action.payload });
      return state + action.payload;
    default:
      return state;
  }
}