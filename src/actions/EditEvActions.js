import axios from 'axios';
import * as types from './types';
import { Actions } from 'react-native-router-flux';

function receiveError() {
	return {
		type: types.RECV_ERROR,
	};
}

export function evValidate({ _id }) {
	const URL = `http://151.80.61.102:3000/api/ev/${_id}/verif`;

	return (dispatch)=> {
      return axios.post(URL).then(() => {
        dispatch({ type: types.EV_VALIDATE_SUCESS });
        Actions.main({ type: 'reset' })
    });
	};
}

export function evDelete({ _id }) {
	const URL = `http://151.80.61.102:3000/api/ev/${_id}/delete`;
	return (dispatch) => {
      dispatch({types:SEND_REQ})
      return axios.delete(URL).then(() => Actions.main({ type: 'reset' }));
	};
}

export function evSave({ title, description, eventDate, _id }) {
	const URL = `http://151.80.61.102:3000/api/ev/${_id}`;
	return (dispatch) => {
      dispatch({types:SEND_REQ_EV})
      return axios.post(URL, {
        title,
        description,
        eventDate,
      }).then(() => {
        dispatch({ type: types.EV_SAVE_SUCESS });
        Actions.main({ type: 'reset' });
      });
	};
}

export function evPicture({imgbase64 , _id }) {
	const URL = `http://151.80.61.102:3000/api/ev/${_id}/img`;
	return (dispatch) => {
      return axios.post(URL, {
        imgbase64
      }).then(() => {
        dispatch({ type: types.EV_SAVE_SUCESS });
        Actions.main({ type: 'reset' });
      });
	};
}

export function evUpdate ({ prop, value }) {
  return {
    type: types.EV_UPDATE,
    payload: { prop, value }
  };
};

export function evCreate ({ title, description, eventDate }) {
  const URL = 'http://151.80.61.102:3000/api/ev/';
  console.log(title);
  return (dispatch) => {
		dispatch({type:types.SEND_REQ_EV})
    return axios.post(URL, {
      title,
      description,
      eventDate
    }).then( (res) => {
      dispatch({ type: types.EV_SAVE_SUCESS });
      Actions.evPicture({ _id: res.data.ev._id });
    });
  };
};
