import axios from 'axios';
import * as types from './types';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { evsGet } from './EvsActions';
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

export const loginUser = ({ token, provider }) => {
  const URL = 'http://151.80.61.102:3000/api/users/auth0/';
  return dispatch => {
    dispatch({ type: types.LOGIN_USER });
    return axios
      .post(URL, {
        token,
        provider
      })
      .then(data => {
        dispatch(loginUserSuccess(data));
        dispatch(
          NavigationActions.navigate({
            routeName: 'HomeApp',
            params: { data: data }
          })
        );
        AsyncStorage.setItem('data', data);
        dispatch(evsGet());
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

const loginUserSuccess = data => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: data
  };
};
