import { takeLatest, put, call } from 'redux-saga/effects';

import { Types as ProcessTypes } from '../../store/ducks/process';

import Http from '../../shared/services/base';

function processHttp(params) {
	return Http.get(`/api/process.json`);
}

function* getProcess(action) {
    try {
		const response = yield call(processHttp.bind(this, action.params));
        yield put({ type: ProcessTypes.SUCCESS_PROCESS, response: response.data });
    }
    catch (err) {
		yield put({ type: ProcessTypes.ERROR_PROCESS, err });
    }
}

export function* processSaga() {
	yield takeLatest(ProcessTypes.GET_PROCESS, getProcess);
}