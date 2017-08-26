import io from 'socket.io-client';
const socket = io();

import { SET_GREEN_TEAM_PROGRESS, ADD_GREEN_TEAM_PROGRESS } from '../../actions/types';

export default function (state = 0, action) {
  switch (action.type) {
    case SET_GREEN_TEAM_PROGRESS:
      return action.payload || '';
    case ADD_GREEN_TEAM_PROGRESS:
      socket.emit('greenProgress', { greenProgress: state + action.payload });
      return state + action.payload;
    default:
      return state;
  }
}