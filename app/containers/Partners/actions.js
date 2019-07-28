/*
 *
 * Partners actions
 *
 */

import {
  FETCH_PARTNERS_INIT,
  FETCH_PARTNERS_SUCCESS,
  FETCH_PARTNERS_FAILURE,
} from './constants';

export function fetchPartnersInitAction() {
  return {
    type: FETCH_PARTNERS_INIT,
  };
}
export function fetchPartnersSuccessAction(data) {
  return {
    type: FETCH_PARTNERS_SUCCESS,
    data,
  };
}
export function fetchPartnersFailureAction(error) {
  return {
    type: FETCH_PARTNERS_FAILURE,
    error,
  };
}
