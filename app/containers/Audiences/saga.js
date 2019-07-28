import { takeLatest, call, put } from 'redux-saga/effects';
import { get } from 'axios';
import { FETCH_AUDIENCES_INIT } from './constants';
import {
  fetchAudienceSuccessAction,
  fetchAudienceFailureAction,
} from './actions';
// Individual exports for testing

export function* getAudiences() {
  const requestURL = `/api/audiences`;

  try {
    const { data } = yield call(get, requestURL);
    yield put(fetchAudienceSuccessAction(data));
  } catch (err) {
    yield put(fetchAudienceFailureAction(err));
  }
}

export default function* audiencesSaga() {
  yield takeLatest(FETCH_AUDIENCES_INIT, getAudiences);
}
