import React, { PropTypes } from 'react';

function Todo ({ id, text, completed, onDeleteTask, onCompleteTask }) {
  const onDelete = (event) => {
    event.preventDefault();
    onDeleteTask(id);
  };

  const onComplete = (event) => {
    event.preventDefault();
    onCompleteTask(id);
  };

  return (
    <li className="collection-item avatar">
      <i className="material-icons circle blue darken-4">
        {completed ? 'done' : 'schedule'}
      </i>
      <span className="title">{text}</span>
      {completed ? (
        <span onClick={onDelete} className="secondary-content">
          <i className="material-icons">delete</i>
        </span>
      ) : (
        <span onClick={onComplete} className="secondary-content">
          <i className="material-icons">done</i>
        </span>
      )}
    </li>
  );
}

Todo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool,
  onDeleteTask: PropTypes.func,
  onCompleteTask: PropTypes.func
};

export default Todo;
