import React from 'react';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { addNavigationHelpers } from 'react-navigation';
import { Root } from './config/routes';

const MyApp = ({ dispatch, nav }) => (
  <Root
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(MyApp);

export default () => (
  <Provider store={createStore(reducers, {}, compose(applyMiddleware(thunk)))}>
    <AppWithNavigation />
  </Provider>
);
