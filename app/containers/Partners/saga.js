import { takeLatest, call, put } from 'redux-saga/effects';
import { get } from 'axios';
import { FETCH_PARTNERS_INIT } from './constants';
import {
  fetchPartnersSuccessAction,
  fetchPartnersFailureAction,
} from './actions';
// Individual exports for testing

export function* getPartners() {
  const requestURL = `/api/partners`;

  try {
    const { data } = yield call(get, requestURL);
    yield put(fetchPartnersSuccessAction(data));
  } catch (err) {
    yield put(fetchPartnersFailureAction(err));
  }
}

export default function* partnersSaga() {
  yield takeLatest(FETCH_PARTNERS_INIT, getPartners);
}
