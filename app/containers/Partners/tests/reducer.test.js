import produce from 'immer';
import partnersReducer from '../reducer';
import {
  fetchPartnersInitAction,
  fetchPartnersSuccessAction,
  fetchPartnersFailureAction,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('partnersReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      data: '',
      loading: false,
      error: null,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(partnersReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the fetchPartnersInitAction action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.data = '';
    });

    expect(partnersReducer(state, fetchPartnersInitAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the fetchPartnersSuccessAction action correctly', () => {
    const fixture = 'foo';
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.data = fixture;
    });

    expect(partnersReducer(state, fetchPartnersSuccessAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the fetchPartnersFailureAction action correctly', () => {
    const fixture = 'err';
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = fixture;
    });

    expect(partnersReducer(state, fetchPartnersFailureAction(fixture))).toEqual(
      expectedResult,
    );
  });
});
