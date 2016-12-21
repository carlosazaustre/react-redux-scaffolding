import {
  LOAD_TODOS,
  UPDATE_TODO,
  CREATE_TODO,
  DELETE_TODO } from './types';

let nextTodoId = 3;

export function loadTodos () {
  return {
    type: LOAD_TODOS
  };
}

export function addTodo (text) {
  return {
    type: CREATE_TODO,
    payload: {
      id: nextTodoId++,
      text
    }
  };
}

export function updateTodo (todoId) {
  return {
    type: UPDATE_TODO,
    payload: todoId
  };
}

export function deleteTodo (todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId
  };
}
