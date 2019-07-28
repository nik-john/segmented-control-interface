/*
 *
 * Brands reducer
 *
 */
import produce from 'immer';
import {
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_INIT,
  FETCH_BRANDS_FAILURE,
} from './constants';

export const initialState = {
  data: '',
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const brandsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_BRANDS_INIT:
        draft.loading = true;
        draft.error = null;
        break;
      case FETCH_BRANDS_SUCCESS:
        draft.loading = false;
        draft.data = action.data;
        draft.error = null;
        break;
      case FETCH_BRANDS_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default brandsReducer;
