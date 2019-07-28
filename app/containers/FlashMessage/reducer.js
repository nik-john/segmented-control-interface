/*
 *
 * FlashMessage reducer
 *
 */
import produce from 'immer';
import { ADD_MESSAGE, REMOVE_MESSAGE } from './constants';

export const initialState = {
  messages: [],
};

/* eslint-disable default-case, no-param-reassign */
const flashMessageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_MESSAGE:
        draft.messages = [
          ...draft.messages,
          {
            id: action.id,
            text: action.message,
          },
        ];
        break;
      case REMOVE_MESSAGE:
        draft.messages = action.id
          ? draft.messages.filter(m => m.id !== action.id)
          : draft.messages;
        break;
    }
  });

export default flashMessageReducer;
