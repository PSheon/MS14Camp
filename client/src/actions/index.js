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

// export const setUser = (userObj) => dispatch => {
//   dispatch({ type: types.SET_USER, payload: userObj });
// }

export const getRoom = (email) => dispatch => {
  let emailData = queryString.stringify({ email: email });
  axios('/api/whatmyroom', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    data:emailData,
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.GET_ROOM, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
}

export const initTeamProgress = (teamId) => dispatch => {
  axios(`/api/initteamprogress/${teamId}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    // console.log(`response is `, response)
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

// export const setTeamProgress = () => dispatch => {
//   axios('/api/teamprogress', {
//     method: 'post',
//     headers: {
//       'Content-type': 'application/x-www-form-urlencoded',
//       'Authorization': `bearer ${Auth.getToken()}`
//     },
//     responseType: 'json'
//   }).then((response) => {
//     if (response.status === 200) {
//       dispatch({ type: types.SET_RED_TEAM_PROGRESS, payload: response.data.redProgress });
//       dispatch({ type: types.SET_BLUE_TEAM_PROGRESS, payload: response.data.blueProgress });
//       dispatch({ type: types.SET_GREEN_TEAM_PROGRESS, payload: response.data.greenProgress });
//       dispatch({ type: types.SET_YELLOW_TEAM_PROGRESS, payload: response.data.yellowProgress });
//     }
//   }).catch(function (error) {
//     console.log(error);
//   });
// }

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
// export const setNpc = (npc_name) => dispatch => {
//   dispatch({ type: types.SET_NPC, payload: npc_name });
// }


//alex
// export const getUserDetail = (email) => dispatch => {
//   let emailData = queryString.stringify({ email: email });
//   axios('/api/user', {
//     method: 'post',
//     headers: {
//       'Content-type': 'application/x-www-form-urlencoded',
//       'Authorization': `bearer ${Auth.getToken()}`
//     },
//     data: emailData,
//     responseType: 'json'
//   }).then((response) => {
//     if (response.status === 200) {
//       dispatch({ type: types.GET_USER, payload: response.data });
//     }
//   }).catch(function (error) {
//     console.log(error);
//   });
// }
export const initUser = (email, callback) => dispatch => {
  let emailData = queryString.stringify({ email: email });
  axios(`/api/user/init`, {
    method: 'put',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    data:emailData,
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.INIT_USER, payload: response.data });
      if (callback) callback();
    }
  }).catch(function (error) {
    console.log(error);
  });
}

export const query = (teamId) => dispatch => {
 
  let team = queryString.stringify({ team: teamId });
  axios(`/api/query`, {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    data:team,
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.GET_INFO, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
}

export const doneMission = (teamId, id, type) => dispatch => {
  let team = queryString.stringify({ team: teamId });

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
      dispatch({ type: types.DONE_MISSION, payload: response.data.team });
      if (response.data.isNew) {
        switch (id[0]) {
          case 'R': dispatch({ type: types.BROADCAST_RED_TEAM_PROGRESS, payload: null }); break;
          case 'B': dispatch({ type: types.BROADCAST_BLUE_TEAM_PROGRESS, payload: null }); break;
          case 'G': dispatch({ type: types.BROADCAST_GREEN_TEAM_PROGRESS, payload: null }); break;
          case 'Y': dispatch({ type: types.BROADCAST_YELLOW_TEAM_PROGRESS, payload: null }); break;
        }
      } else {
        Materialize.toast('任務已經解過了喔!', 3000)
      }
    } 
  }).catch(function (error) {
    console.log(error);
  });
}

export const doMoney = (teamId, id, type) => dispatch => {
  let mId= queryString.stringify({mId:id});
  console.log(`doing money`)
  axios(`/api/money/${teamId}/${type}`, {
    method: 'put',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    data: mId,
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.DO_MONEY, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
}