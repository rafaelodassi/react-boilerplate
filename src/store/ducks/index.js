import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import process from './process';

const createRootReducer = history => combineReducers({
	router: connectRouter(history),
	process
});

export default createRootReducer;