/*
 *
 * Audiences actions
 *
 */

import {
  FETCH_AUDIENCES_INIT,
  FETCH_AUDIENCES_SUCCESS,
  FETCH_AUDIENCES_FAILURE,
} from './constants';

export function fetchAudienceInitAction() {
  return {
    type: FETCH_AUDIENCES_INIT,
  };
}
export function fetchAudienceSuccessAction(data) {
  return {
    type: FETCH_AUDIENCES_SUCCESS,
    data,
  };
}
export function fetchAudienceFailureAction(error) {
  return {
    type: FETCH_AUDIENCES_FAILURE,
    error,
  };
}
