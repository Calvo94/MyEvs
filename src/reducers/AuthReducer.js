import * as types from '../actions/types';

const INITIAL_STATE = {
  email: '',
  name: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case types.NAME_CHANGED:
      return { ...state, name: action.payload };
    case types.LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case types.LOGIN_USER_FAIL:
      return { ...state, error: 'Authentification Failed.', password: '', loading: false };
    default:
      return state;
  }
};
