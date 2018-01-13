import * as types from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  evs: [],
  error: false,
  ev_id: -1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case types.SEND_REQ:
    return Object.assign({}, state, { isLoading: true, error: false });
  case types.RECV_DATA:
    return Object.assign({}, state, {
      isLoading: false,
      evs: action.data,
      error: false
    });
  case types.SELECT_EV:
    return Object.assign({}, state, { ev_id: action.payload });
  default:
    return state;
  }
};
