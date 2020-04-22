import { all, fork } from "redux-saga/effects";

import * as processSagas from "./process";

const getValuesInObject = obj => Object.keys(obj).map(value => obj[value]);

export default function* rootSaga() {
    yield all([
		...getValuesInObject(processSagas)
    ].map(fork));
}