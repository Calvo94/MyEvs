import axios from 'axios';
import * as types from './types';
import { Actions } from 'react-native-router-flux';

export const evSelect = evId => {
  return {
    type: types.SELECT_EV,
    payload: evId
  };
};

function sendReq() {
  return {
    type: types.SEND_REQ
  };
}

function receiveData(json) {
  return {
    type: types.RECV_DATA,
    data: json
  };
}

function receiveError() {
  return {
    type: types.RECV_ERROR
  };
}

export function evsGet() {
  const URL = 'http://151.80.61.102:3000/api/evs';
  return dispatch => {
    dispatch(sendReq());
    return axios
      .get(URL)
      .then(data => dispatch(receiveData(data.data.evs)))
      .catch(() => dispatch(receiveError()));
  };
}

export function evRate({ note, _id }) {
  const URL = `http://151.80.61.102:3000/api/ev/${_id}/note`;
  return dispatch => {
    return axios
      .post(URL, {
        note
      })
      .then(() => {
        dispatch({ type: types.EV_SAVE_SUCESS });
        Actions.main({ type: 'reset' });
      })
      .catch(() => dispatch(receiveError()));
  };
}
