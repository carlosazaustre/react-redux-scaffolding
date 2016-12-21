import { CREATE_TODO, LOAD_TODOS } from '../actions/types';

import initialState from './initialState';

export default function todosReducer (state = initialState.todos, action) {
  switch (action.type) {
    case LOAD_TODOS:
      return state;

    case CREATE_TODO: {
      const { id, text } = action.payload;
      const todo = { id, text, completed: false };

      return [...state, todo];
    }

    default:
      return state;
  }
}
