import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware,compose } from 'redux';
import reducers from './reducers';
import Router from './Router';
import TabView from 'react-native-scrollable-tab-view';

const App = () => (

		<Provider store={createStore(
				reducers,{},
				compose(
					applyMiddleware(thunk)
        )
				)}>
			<View style={{ flex: 1 }}>
				 <Router />
			</View>
		</Provider>
	);

export default App;
