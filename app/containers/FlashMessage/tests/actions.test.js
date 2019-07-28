import { addMessageAction, removeMessageAction } from '../actions';
import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants';

const message = { text: 'Test', id: 0 };

describe('FlashMessage actions', () => {
  describe('Add Message Action', () => {
    it.skip('has a type of ADD_MESSAGE', () => {
      const expected = {
        type: ADD_MESSAGE,
        message,
      };
      expect(addMessageAction(message)).toEqual(expected);
    });
  });
  describe('Remmove Message Action', () => {
    it.skip('has a type of REMOVE_MESSAGE', () => {
      const expected = {
        type: REMOVE_MESSAGE,
        message,
      };
      expect(removeMessageAction(message)).toEqual(expected);
    });
  });
});
