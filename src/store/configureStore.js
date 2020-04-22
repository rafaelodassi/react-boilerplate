import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';

// import logger from 'redux-logger';

import createRootReducer from './ducks';
import rootSaga from './sagas';

export const history = createBrowserHistory({
	basename: process.env.PUBLIC_URL
});

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
	const store = createStore(
		createRootReducer(history),
	  	preloadedState,
	  	compose(
			applyMiddleware(
		  		routerMiddleware(history),
				sagaMiddleware,
				//logger
			)
	  	)
	);

	sagaMiddleware.run(rootSaga);

	return store;
}