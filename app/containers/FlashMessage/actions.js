/*
 *
 * FlashMessage actions
 *
 */

import { ADD_MESSAGE, REMOVE_MESSAGE } from './constants';

// TODO: Move this to saga
function uniqueID() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}

export function addMessageAction(message) {
  return {
    type: ADD_MESSAGE,
    message,
    id: uniqueID(),
  };
}

export function removeMessageAction(id) {
  return {
    type: REMOVE_MESSAGE,
    id,
  };
}
