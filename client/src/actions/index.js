import axios from 'axios';

import { SET_SECRET, GET_ROOM } from './types';
import Auth from '../modules/Auth';


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
  axios.get('/api/dashboard', {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: SET_SECRET, payload: response.data.message });
    }
  }).catch(function (error) {
    console.log(error);
  });
}

export const getRoom = () => dispatch => {
  axios.get('/api/whatmyroom', {
    method: 'get',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${Auth.getToken()}`
    },
    responseType: 'json'
  }).then((response) => {
    if (response.status === 200) {
      dispatch({ type: GET_ROOM, payload: response.data.room });
    }
  }).catch(function (error) {
    console.log(error);
  });
}