/*
 *
 * Audiences reducer
 *
 */
import produce from 'immer';
import {
  FETCH_AUDIENCES_SUCCESS,
  FETCH_AUDIENCES_INIT,
  FETCH_AUDIENCES_FAILURE,
} from './constants';

export const initialState = {
  data: '',
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const audiencesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_AUDIENCES_INIT:
        draft.loading = true;
        draft.error = null;
        break;
      case FETCH_AUDIENCES_SUCCESS:
        draft.loading = false;
        draft.data = action.data;
        draft.error = null;
        break;
      case FETCH_AUDIENCES_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default audiencesReducer;
