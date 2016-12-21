import React, { PropTypes } from 'react';

function Todo ({ text, completed, onRemoveTask, onCompleteTask }) {
  return (
    <li className="collection-item avatar">
      <i className="material-icons circle blue darken-4">
        {completed ? 'done' : 'schedule'}
      </i>
      <span className="title">{text}</span>
      {completed ? (
        <span onClick={onRemoveTask} className="secondary-content">
          <i className="material-icons">delete</i>
        </span>
      ) : (
        <span onClick={onCompleteTask} className="secondary-content">
          <i className="material-icons">done</i>
        </span>
      )}
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
  onRemoveTask: PropTypes.func,
  onCompleteTask: PropTypes.func
};

export default Todo;
