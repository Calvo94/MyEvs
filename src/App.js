import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import Router from './Router';

const App = () => (
  <Provider store={createStore(reducers, {}, compose(applyMiddleware(thunk)))}>
    <Router />
  </Provider>
);

export default App;
