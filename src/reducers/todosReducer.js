import { GET_TODOS_SUCCESS } from '../actions/types';

import initialState from './initialState';

export default function todosReducer (state = initialState.todos, action) {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return state.concat(action.payload);

    default:
      return state;
  }
}
