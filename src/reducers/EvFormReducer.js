import * as types from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  title: '',
  description: '',
  eventDate: '',
  imgbase64: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case types.SEND_REQ_EV:
    return Object.assign({}, state, { isLoading: true, error: false });
  case types.EV_SAVE_SUCESS:
    return Object.assign({}, state, { isLoading: false, error: false });
  case types.EV_UPDATE:
    // actions.payload === { prop: 'name', value: 'jane'}
    return { ...state, [action.payload.prop]: action.payload.value };
  default:
    return state;
  }
};
