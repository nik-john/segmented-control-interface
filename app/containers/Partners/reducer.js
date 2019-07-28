/*
 *
 * Partners reducer
 *
 */
import produce from 'immer';
import {
  FETCH_PARTNERS_SUCCESS,
  FETCH_PARTNERS_INIT,
  FETCH_PARTNERS_FAILURE,
} from './constants';

export const initialState = {
  data: '',
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const partnersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_PARTNERS_INIT:
        draft.loading = true;
        draft.error = null;
        break;
      case FETCH_PARTNERS_SUCCESS:
        draft.loading = false;
        draft.data = action.data;
        draft.error = null;
        break;
      case FETCH_PARTNERS_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default partnersReducer;
