import { NavigationActions } from 'react-navigation';
import { Root } from '../config/routes';

const initialState = Root.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
  const nextState = Root.router.getStateForAction(action, state);
  return nextState || state;
};
