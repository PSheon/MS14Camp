import { SET_SECRET } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case SET_SECRET:
      return action.payload || '';
    default:
      return state;
  }
}