import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the brands state domain
 */

const selectBrandsDomain = state => state.brands || initialState;

/**
 * Other specific selectors
 */
const makeSelectBrandsData = () =>
  createSelector(
    selectBrandsDomain,
    substate => substate.data,
  );
const makeSelectBrandsLoading = () =>
  createSelector(
    selectBrandsDomain,
    substate => substate.loading,
  );
const makeSelectBrandsError = () =>
  createSelector(
    selectBrandsDomain,
    substate => substate.error,
  );
/**
 * Default selector used by Brands
 */

const makeSelectBrands = () =>
  createSelector(
    selectBrandsDomain,
    substate => substate,
  );

export default makeSelectBrands;
export { makeSelectBrandsData, makeSelectBrandsLoading, makeSelectBrandsError };
