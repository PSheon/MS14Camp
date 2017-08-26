import axios from 'axios';

import * as types from './types';
import Auth from '../modules/Auth';
const queryString = require('query-string');

export const setSecret = () => dispatch => {
  // const xhr = new XMLHttpRequest();
  // xhr.open('get', '/api/dashboard');
  // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  // // set the authorization HTTP header
  // xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
  // xhr.responseType = 'json';
  // xhr.addEventListener('load', () => {
  //   if (xhr.status === 200) {
  //     // this.setState({
  //     //   secretData: xhr.response.message
  //     // });
  //     dispatch({ type: SET_SECRET, payload: xhr.response.message });
  //   }
  // });
  // xhr.send();
  axios('/api/dashboard', {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.SET_SECRET, payload: response.data.message });
    }
  }).catch(function (error) {
    console.log(error);
  });
}

export const setUser = (userObj) => dispatch => {
  dispatch({ type: types.SET_USER, payload: userObj });
}

export const getRoom = () => dispatch => {
  axios('/api/whatmyroom', {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.GET_ROOM, payload: response.data.room });
    }
  }).catch(function (error) {
    console.log(error);
  });
}

export const setTeamProgress = () => dispatch => {
  axios('/api/teamprogress', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.SET_RED_TEAM_PROGRESS, payload: response.data.redProgress });
      dispatch({ type: types.SET_BLUE_TEAM_PROGRESS, payload: response.data.blueProgress });
      dispatch({ type: types.SET_GREEN_TEAM_PROGRESS, payload: response.data.greenProgress });
      dispatch({ type: types.SET_YELLOW_TEAM_PROGRESS, payload: response.data.yellowProgress });
    }
  }).catch(function (error) {
    console.log(error);
  });
}

export const addRedProgress = (add_block) => dispatch => {
  dispatch({ type: types.ADD_RED_TEAM_PROGRESS, payload: add_block });
}

export const addBlueProgress = ( add_block ) => dispatch => {
  dispatch({ type: types.ADD_BLUE_TEAM_PROGRESS, payload: add_block });
}

export const addGreenProgress = (add_block) => dispatch => {
  dispatch({ type: types.ADD_GREEN_TEAM_PROGRESS, payload: add_block });
}

export const addYellowProgress = (add_block) => dispatch => {
  dispatch({ type: types.ADD_YELLOW_TEAM_PROGRESS, payload: add_block });
}

// change npc
export const setNpc = (npc_name) => dispatch => {
  dispatch({ type: types.SET_NPC, payload: npc_name });
}


//alex


//useless
export const getMission = (teamId) => dispatch => {
  console.log(`api is call with ${teamId}`);
  let team = queryString.stringify({ team: teamId });
  axios(`/api/querymission`, {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    data:team,
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.GET_MISSION, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
}

export const doneMission = (teamId, id, type) => dispatch => {
  let team = queryString.stringify({ team: teamId });
  console.log(`${teamId} is calling api  with ${id} with ${type}`);
  axios(`/api/donemission/${id}/${type}`, {
    method: 'put',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    data: team,
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.DONE_MISSION, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
}

export const getMoney = (id, type) => dispatch => {
  console.log(`api is call with ${id}`);
  axios.get(`/api/getmoney/${id}/${type}`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.GET_MONEY, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
}