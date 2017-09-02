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
  }).catch((error) => {
    console.log(error);
  });
}

// export const initTeamProgress = (teamId) => dispatch => {
//   axios(`/api/initteamprogress/${teamId}`, {
//     method: 'post',
//     headers: {
//       'Content-type': 'application/x-www-form-urlencoded',
//       'Authorization': `bearer ${Auth.getToken()}`
//     },
//     responseType: 'json'
//   }).then((response) => {
//     // console.log(`response is `, response)
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

export const initTeamProgress = () => dispatch => {
  axios('/api/initteamprogress', {
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
  dispatch({ type: types.BROADCAST_RED_TEAM_PROGRESS, payload: null });
}

export const addBlueProgress = ( add_block ) => dispatch => {
  dispatch({ type: types.ADD_BLUE_TEAM_PROGRESS, payload: add_block });
  dispatch({ type: types.BROADCAST_BLUE_TEAM_PROGRESS, payload: null });
}

export const addGreenProgress = (add_block) => dispatch => {
  dispatch({ type: types.ADD_GREEN_TEAM_PROGRESS, payload: add_block });
  dispatch({ type: types.BROADCAST_GREEN_TEAM_PROGRESS, payload: null });
}

export const addYellowProgress = (add_block) => dispatch => {
  dispatch({ type: types.ADD_YELLOW_TEAM_PROGRESS, payload: add_block });
  dispatch({ type: types.BROADCAST_YELLOW_TEAM_PROGRESS, payload: null });
}

//alex
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
        Materialize.toast('騎士，這個任務不能解!', 3000)
      }
    } 
  }).catch(function (error) {
    console.log(error);
  });
}

export const doMoney = (teamId, id, type) => dispatch => {
  let mId= queryString.stringify({mId:id});
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

//bacl end util

//get room 
export const makeRoom=()=>dispatch=>{
  axios(`/api/makeroom`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.MAKE_ROOM, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
} 

export const delRoom = () => dispatch => {
  axios(`/api/godr/delroom`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.DEL_ROOM, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
} 

export const queryRoom = () => dispatch => {
  axios(`/api/godr/room`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.QUERY_ROOM, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
} 

export const queryUser = () => dispatch => {
  axios(`/api/user/all`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.QUERY_USER, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
} 

export const delUser = () => dispatch => {
  axios(`/api/godu/delete`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.DEL_USER, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
} 

export const addMoney = () => dispatch => {
  axios(`/api/godm/init`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.ADD_MONEY, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
} 

export const delMoney = () => dispatch => {
  axios(`/api/godm/delete`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.DEL_MONEY, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
} 

export const queryMoney = () => dispatch => {
  axios(`/api/godm/query`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.QUERY_MONEY, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
} 


export const queryTeam = () => dispatch => {
  axios(`/api/godt/query`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.QUERY_TEAM, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
} 

export const delTeam = () => dispatch => {
  axios(`/api/godt/delete`, {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: types.DEL_TEAM, payload: response.data });
    }
  }).catch(function (error) {
    console.log(error);
  });
} 

export const initTeam = () => dispatch => {
  for(let i=1;i<=9;i++){
    console.log(i);
    axios(`/api/godt/init/t0${i}`, {
      method: 'get',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': `bearer ${Auth.getToken()}`
      },
      responseType: 'json'
    }).then((response) => {
      if (response.status === 200) {
        dispatch({ type: types.INIT_TEAM, payload: response.data });
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
} 