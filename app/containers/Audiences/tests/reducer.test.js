import produce from 'immer';
import audiencesReducer from '../reducer';
import {
  fetchAudienceInitAction,
  fetchAudienceSuccessAction,
  fetchAudienceFailureAction,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('audiencesReducer', () => {
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
    expect(audiencesReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the fetchAudienceInitAction action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.data = '';
    });

    expect(audiencesReducer(state, fetchAudienceInitAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the fetchAudienceSuccessAction action correctly', () => {
    const fixture = 'foo';
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.data = fixture;
    });

    expect(
      audiencesReducer(state, fetchAudienceSuccessAction(fixture)),
    ).toEqual(expectedResult);
  });

  it('should handle the fetchAudienceFailureAction action correctly', () => {
    const fixture = 'err';
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = fixture;
    });

    expect(
      audiencesReducer(state, fetchAudienceFailureAction(fixture)),
    ).toEqual(expectedResult);
  });
});
