import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	getProcess: [],
	successProcess: [],
	errorProcess: []
}, { prefix: "@@process/" });

const initialState = {
	processData: null,
	loading: false,
	error: false
};

const getProcess = (state = initialState, action) => {
	return {
		...state,
		processData: {},
		loading: true,
		error: false
	}
};

const successProcess = (state = initialState, action) => {
	return {
		...state,
		processData: action.response,
		loading: false,
		error: false
	}
};

const errorProcess = (state = initialState, action) => {
	return {
		...state,
		processData: {},
		loading: false,
		error: action.err
	}
};

export default createReducer(initialState, {
	[Types.GET_PROCESS]: getProcess,
	[Types.SUCCESS_PROCESS]: successProcess,
	[Types.ERROR_PROCESS]: errorProcess
});