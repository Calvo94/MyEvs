import { NavigationActions } from 'react-navigation';
import { HomeApp } from '../config/routes';

const initialState = HomeApp.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
  const nextState = HomeApp.router.getStateForAction(action, state);
  return nextState || state;
};
