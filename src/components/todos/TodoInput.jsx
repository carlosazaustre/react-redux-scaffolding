import React, { PropTypes } from 'react';

function TodoInput ({ onAddTask }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    let text = event.target.text.value;
    onAddTask(text);
    text = '';
  };

  return (
    <form className="row" onSubmit={handleFormSubmit}>
      <div className="input-field">
        <input id="text" type="text" name="text" />
        <label htmlFor="text">Yout Task</label>
      </div>
    </form>
  );
}

TodoInput.propTypes = {
  onAddTask: PropTypes.func
};

export default TodoInput;
