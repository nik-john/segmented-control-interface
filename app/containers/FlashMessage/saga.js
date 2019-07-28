import { all, put, takeEvery, delay } from 'redux-saga/effects';
import { ADD_MESSAGE } from './constants';
import { removeMessageAction } from './actions';

/**
 * Github repos request/response handler
 */
export function* autoClose(action) {
  yield delay(5000);
  yield put(removeMessageAction(action.id));
}

export const autoCloseSaga = takeEvery(ADD_MESSAGE, autoClose);

// Individual exports for testing
export default function* authRouteSaga() {
  yield all([autoCloseSaga]);
}
