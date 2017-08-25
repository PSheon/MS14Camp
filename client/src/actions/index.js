import axios from 'axios';

// import {
//   SET_SECRET,
//   GET_ROOM,
//   SET_RED_TEAM_PROCESS,
//   SET_BLUE_TEAM_PROCESS,
//   SET_GREEN_TEAM_PROCESS,
//   SET_YELLOW_TEAM_PROCESS,
//   ADD_RED_TEAM_PROCESS,
//   ADD_BLUE_TEAM_PROCESS,
//   ADD_GREEN_TEAM_PROCESS,
//   ADD_YELLOW_TEAM_PROCESS
// } from './types';
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

export const setTeamProcess = () => dispatch => {
  axios('/api/teamprocess', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.SET_RED_TEAM_PROCESS, payload: response.data.redProcess });
      dispatch({ type: types.SET_BLUE_TEAM_PROCESS, payload: response.data.blueProcess });
      dispatch({ type: types.SET_GREEN_TEAM_PROCESS, payload: response.data.greenProcess });
      dispatch({ type: types.SET_YELLOW_TEAM_PROCESS, payload: response.data.yellowProcess });
    }
  }).catch(function (error) {
    console.log(error);
  });
}

export const addRedProcess = (add_block) => dispatch => {
  dispatch({ type: types.ADD_RED_TEAM_PROCESS, payload: add_block });
}

export const addBlueProcess = ( add_block ) => dispatch => {
  dispatch({ type: types.ADD_BLUE_TEAM_PROCESS, payload: add_block });
}

export const addGreenProcess = (add_block) => dispatch => {
  dispatch({ type: types.ADD_GREEN_TEAM_PROCESS, payload: add_block });
}

export const addYellowProcess = (add_block) => dispatch => {
  dispatch({ type: types.ADD_YELLOW_TEAM_PROCESS, payload: add_block });
}

// change npc
export const setNpc = (npc_name) => dispatch => {
  dispatch({ type: types.SET_NPC, payload: npc_name });
}


//alex


//useless
export const getMission = (id, type) => dispatch => {
  console.log(`api is call with ${id} with ${type}`);
  axios.get(`/api/getmission/${id}/${type}`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
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
      dispatch({ type: types.GET_MISSION, payload: response.data });
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