import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the flashMessage state domain
 */

const selectFlashMessageDomain = state => state.flashMessage || initialState;

/**
 * Other specific selectors
 */
const makeSelectMessages = () =>
  createSelector(
    selectFlashMessageDomain,
    substate => substate.messages,
  );

/**
 * Default selector used by FlashMessage
 */

const makeSelectFlashMessage = () =>
  createSelector(
    selectFlashMessageDomain,
    substate => substate,
  );

export default makeSelectFlashMessage;
export { makeSelectMessages };
