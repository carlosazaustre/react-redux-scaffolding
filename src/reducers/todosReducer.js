import { Map } from 'immutable';

import {
  CREATE_TODO,
  LOAD_TODOS,
  UPDATE_TODO,
  DELETE_TODO } from '../actions/types';
import initialState from './initialState';

export default function todosReducer (state = initialState.get('todos'), action) {
  switch (action.type) {
    case LOAD_TODOS:
      return state;

    case CREATE_TODO: 
      return state.set(action.payload.id, Map({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      }));

    case UPDATE_TODO: 
      return state.setIn([action.payload, 'completed'], true);

    case DELETE_TODO:
      return state.delete(action.payload);

    default:
      return state;
  }
}
