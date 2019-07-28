import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the partners state domain
 */

const selectPartnersDomain = state => state.partners || initialState;

/**
 * Other specific selectors
 */
const makeSelectPartnersData = () =>
  createSelector(
    selectPartnersDomain,
    substate => substate.data,
  );
/**
 * Default selector used by Partners
 */

const makeSelectPartners = () =>
  createSelector(
    selectPartnersDomain,
    substate => substate,
  );

export default makeSelectPartners;
export { makeSelectPartnersData };
