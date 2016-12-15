import {
  GET_TODOS_SUCCESS,
  CREATE_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS
} from '../actions/types';

import initialState from './initialState';

export default function todoReducer (state = initialState.todos, action) {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return state;

    case CREATE_TODO_SUCCESS:
      return state;

    case UPDATE_TODO_SUCCESS:
      return state;

    case DELETE_TODO_SUCCESS:
      return state;

    default:
      return state;
  }
}
