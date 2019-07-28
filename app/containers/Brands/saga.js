import { takeLatest, call, put } from 'redux-saga/effects';
import { get } from 'axios';
import { addMessageAction } from 'containers/FlashMessage/actions';
import { FETCH_BRANDS_INIT } from './constants';
import { fetchBrandsSuccessAction, fetchBrandsFailureAction } from './actions';
// Individual exports for testing

export function* getBrands() {
  const requestURL = `/api/brandss`;

  try {
    const { data } = yield call(get, requestURL);
    yield put(fetchBrandsSuccessAction(data));
  } catch (err) {
    yield put(fetchBrandsFailureAction(err));
    yield put(
      addMessageAction(
        `Whoops! Couldn't fetch Brands data (This is a deliberately introduced bug to show Flash Messaging)`,
      ),
    );
  }
}

export default function* brandsSaga() {
  yield takeLatest(FETCH_BRANDS_INIT, getBrands);
}
