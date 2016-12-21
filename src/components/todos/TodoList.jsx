import React, { PropTypes } from 'react';

import Todo from './Todo';

function TodoList ({ todos, onDeleteTask, onCompleteTask }) {
  return (
    <ul className="collection">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
          {...todo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDeleteTask: PropTypes.func,
  onCompleteTask: PropTypes.func
};

export default TodoList;
