import { LOAD_TODOS, CREATE_TODO, DELETE_TODO } from './types';

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

export function deleteTodo (todoId) {
  return {
    type: DELETE_TODO
  };
}
