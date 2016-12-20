import React, { PropTypes } from 'react';

import Todo from './Todo';

function TodoList ({ todos, onRemoveTask, onDoneTask }) {
  return (
    <ul className="collection">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          onRemoveTask={onRemoveTask}
          onDoneTask={onDoneTask}
          {...todo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onRemoveTask: PropTypes.func,
  onDoneTask: PropTypes.func
};

export default TodoList;
