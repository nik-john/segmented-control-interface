import {
  fetchBrandsInitAction,
  fetchBrandsSuccessAction,
  fetchBrandsFailureAction,
} from '../actions';
import {
  FETCH_BRANDS_INIT,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_FAILURE,
} from '../constants';

describe('Brands actions', () => {
  describe('fetchBrandsInitAction Action', () => {
    it('has a type of FETCH_BRANDS_INIT', () => {
      const expected = {
        type: FETCH_BRANDS_INIT,
      };
      expect(fetchBrandsInitAction()).toEqual(expected);
    });
  });
  describe('fetchBrandsSuccessAction Action', () => {
    it('has a type of FETCH_BRANDS_SUCCESS', () => {
      const fixture = 'foo';
      const expected = {
        type: FETCH_BRANDS_SUCCESS,
        data: fixture,
      };
      expect(fetchBrandsSuccessAction(fixture)).toEqual(expected);
    });
  });
  describe('fetchBrandsFailureAction Action', () => {
    it('has a type of FETCH_BRANDS_FAILURE', () => {
      const fixture = 'err';
      const expected = {
        type: FETCH_BRANDS_FAILURE,
        error: fixture,
      };
      expect(fetchBrandsFailureAction(fixture)).toEqual(expected);
    });
  });
});
