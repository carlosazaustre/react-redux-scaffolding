import React, { PropTypes } from 'react';

function Todo ({ title, completed, onRemoveTask, onDoneTask }) {
  return (
    <li className="collection-item avatar">
      <i className="material-icons circle blue darken-4">
        {completed ? 'done' : 'schedule'}
      </i>
      <span className="title">{title}</span>
      {completed ? (
        <span onClick={onRemoveTask} className="secondary-content">
          <i className="material-icons">delete</i>
        </span>
      ) : (
        <span onClick={onDoneTask} className="secondary-content">
          <i className="material-icons">done</i>
        </span>
      )}
    </li>
  );
}

Todo.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  onRemoveTask: PropTypes.func,
  onDoneTask: PropTypes.func
};

export default Todo;
