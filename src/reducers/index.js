import { combineReducers } from 'redux';
import EvReducer from './EvReducer';
import EvFormReducer from './EvFormReducer';
import AuthReducer from './AuthReducer';
import nav from './nav';

export default combineReducers({
  evs: EvReducer,
  evForm: EvFormReducer,
  auth: AuthReducer,
  nav
});
