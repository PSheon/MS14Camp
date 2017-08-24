import io from 'socket.io-client';
const socket = io();

import { SET_NPC } from '../../actions/types';

export default function (state = 'elder', action) {
  switch (action.type) {
    case SET_NPC:
      return action.payload;
    default:
      return state;
  }
}