import {
  CREATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  GET_TODOS_SUCCESS
} from './types';

// -- Action creators
export function createTodoSuccess (todo) {
  return { type: CREATE_TODO_SUCCESS, payload: todo };
}

export function deleteTodoSuccess (todo) {
  return { type: DELETE_TODO_SUCCESS, payload: todo };
}

export function updateTodoSuccess (todo) {
  return { type: UPDATE_TODO_SUCCESS, payload: todo };
}

export function getTodosSuccess (todos) {
  return { type: GET_TODOS_SUCCESS, payload: todos };
}

// -- Async Thunks
export function createTodo (todo) {
  return (dispatch) => {
    dispatch(createTodoSuccess(todo));
  };
}

export function updateTodo (todo) {
  return (dispatch) => {
    dispatch(updateTodoSuccess(todo));
  };
}

export function deleteTodo (todo) {
  return (dispatch) => {
    dispatch(deleteTodoSuccess(todo));
  };
}

export function getTodos () {
  return (dispatch) => {
    dispatch(getTodos());
  };
}
