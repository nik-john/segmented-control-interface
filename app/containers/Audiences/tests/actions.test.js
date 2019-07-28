import {
  fetchAudienceInitAction,
  fetchAudienceSuccessAction,
  fetchAudienceFailureAction,
} from '../actions';
import {
  FETCH_AUDIENCES_INIT,
  FETCH_AUDIENCES_SUCCESS,
  FETCH_AUDIENCES_FAILURE,
} from '../constants';

describe('Audiences actions', () => {
  describe('fetchAudienceInitAction Action', () => {
    it('has a type of FETCH_AUDIENCES_INIT', () => {
      const expected = {
        type: FETCH_AUDIENCES_INIT,
      };
      expect(fetchAudienceInitAction()).toEqual(expected);
    });
  });
  describe('fetchAudienceSuccessAction Action', () => {
    it('has a type of FETCH_AUDIENCES_SUCCESS', () => {
      const fixture = 'foo';
      const expected = {
        type: FETCH_AUDIENCES_SUCCESS,
        data: fixture,
      };
      expect(fetchAudienceSuccessAction(fixture)).toEqual(expected);
    });
  });
  describe('fetchAudienceFailureAction Action', () => {
    it('has a type of FETCH_AUDIENCES_FAILURE', () => {
      const fixture = 'err';
      const expected = {
        type: FETCH_AUDIENCES_FAILURE,
        error: fixture,
      };
      expect(fetchAudienceFailureAction(fixture)).toEqual(expected);
    });
  });
});
