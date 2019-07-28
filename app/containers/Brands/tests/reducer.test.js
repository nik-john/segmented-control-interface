import produce from 'immer';
import brandsReducer from '../reducer';
import {
  fetchBrandsInitAction,
  fetchBrandsSuccessAction,
  fetchBrandsFailureAction,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('brandsReducer', () => {
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
    expect(brandsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the fetchBrandsInitAction action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.data = '';
    });

    expect(brandsReducer(state, fetchBrandsInitAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the fetchBrandsSuccessAction action correctly', () => {
    const fixture = 'foo';
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.data = fixture;
    });

    expect(brandsReducer(state, fetchBrandsSuccessAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the fetchBrandsFailureAction action correctly', () => {
    const fixture = 'err';
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = fixture;
    });

    expect(brandsReducer(state, fetchBrandsFailureAction(fixture))).toEqual(
      expectedResult,
    );
  });
});
