import axios from 'axios';
import * as types from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = text => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text
  };
};

export const nameChanged = text => {
  return {
    type: types.NAME_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, name }) => {
  const URL = 'http://151.80.61.102:3000/api/users/auth0/';
  return dispatch => {
    dispatch({ type: types.LOGIN_USER });
    return axios
      .post(URL, {
        fullName: name,
        email
      })
      .then(() => {
        dispatch(loginUserSuccess());
        Actions.Home();
      })
      .catch(() => {
        dispatch(loginUserFail());
      });
  };
};

const loginUserFail = () => {
  return {
    type: types.LOGIN_USER_FAIL
  };
};

const loginUserSuccess = user => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  };
};
