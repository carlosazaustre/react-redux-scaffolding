import API from '../api';
import { GET_TODOS_SUCCESS } from './types';

// -- Action creators
export function getTodosSuccess (todos) {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos
  };
}

// -- Thunk Async Action Dispatchers
export function getTodos () {
  return async (dispatch) => {
    const todos = await API.todos.getList();
    dispatch(getTodosSuccess(todos));

    return todos;
  };
}
