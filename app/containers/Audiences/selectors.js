import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the audiences state domain
 */

const selectAudiencesDomain = state => state.audiences || initialState;

/**
 * Other specific selectors
 */
const makeSelectAudienceData = () =>
  createSelector(
    selectAudiencesDomain,
    substate => substate.data,
  );

const makeSelectAudiencesLoading = () =>
  createSelector(
    selectAudiencesDomain,
    substate => substate.loading,
  );
/**
 * Default selector used by Audiences
 */

const makeSelectAudiences = () =>
  createSelector(
    selectAudiencesDomain,
    substate => substate,
  );

export default makeSelectAudiences;
export { makeSelectAudienceData, makeSelectAudiencesLoading };
