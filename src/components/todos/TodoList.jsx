import React, { PropTypes } from 'react';

import Todo from './Todo';

function TodoList ({ todos, onDeleteTask, onCompleteTask }) {
  return (
    <ul className="collection">
      {todos.map(todo => (
        <Todo
          key={todo.get('id')}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
          {...todo.toJS()}
        />
      )).toArray()}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.shape({
    size: PropTypes.number,
    get: PropTypes.func
  }),
  onDeleteTask: PropTypes.func,
  onCompleteTask: PropTypes.func
};

export default TodoList;
