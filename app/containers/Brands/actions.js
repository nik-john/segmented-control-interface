/*
 *
 * Brands actions
 *
 */

import {
  FETCH_BRANDS_INIT,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_FAILURE,
} from './constants';

export function fetchBrandsInitAction() {
  return {
    type: FETCH_BRANDS_INIT,
  };
}
export function fetchBrandsSuccessAction(data) {
  return {
    type: FETCH_BRANDS_SUCCESS,
    data,
  };
}
export function fetchBrandsFailureAction(error) {
  return {
    type: FETCH_BRANDS_FAILURE,
    error,
  };
}
