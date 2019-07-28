import { takeLatest, call, put } from 'redux-saga/effects';
import { get } from 'axios';
import { FETCH_BRANDS_INIT } from './constants';
import { fetchBrandsSuccessAction, fetchBrandsFailureAction } from './actions';
// Individual exports for testing

export function* getBrands() {
  const requestURL = `/api/brands`;

  try {
    const { data } = yield call(get, requestURL);
    yield put(fetchBrandsSuccessAction(data));
  } catch (err) {
    yield put(fetchBrandsFailureAction(err));
  }
}

export default function* brandsSaga() {
  yield takeLatest(FETCH_BRANDS_INIT, getBrands);
}
