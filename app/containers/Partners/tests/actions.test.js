import {
  fetchPartnersInitAction,
  fetchPartnersSuccessAction,
  fetchPartnersFailureAction,
} from '../actions';
import {
  FETCH_PARTNERS_INIT,
  FETCH_PARTNERS_SUCCESS,
  FETCH_PARTNERS_FAILURE,
} from '../constants';

describe('Partners actions', () => {
  describe('fetchPartnersInitAction Action', () => {
    it('has a type of FETCH_PARTNERS_INIT', () => {
      const expected = {
        type: FETCH_PARTNERS_INIT,
      };
      expect(fetchPartnersInitAction()).toEqual(expected);
    });
  });
  describe('fetchPartnersSuccessAction Action', () => {
    it('has a type of FETCH_PARTNERS_SUCCESS', () => {
      const fixture = 'foo';
      const expected = {
        type: FETCH_PARTNERS_SUCCESS,
        data: fixture,
      };
      expect(fetchPartnersSuccessAction(fixture)).toEqual(expected);
    });
  });
  describe('fetchPartnersFailureAction Action', () => {
    it('has a type of FETCH_PARTNERS_FAILURE', () => {
      const fixture = 'err';
      const expected = {
        type: FETCH_PARTNERS_FAILURE,
        error: fixture,
      };
      expect(fetchPartnersFailureAction(fixture)).toEqual(expected);
    });
  });
});
