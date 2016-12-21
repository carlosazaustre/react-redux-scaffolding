import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../actions/todoActions';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class TodoContainer extends React.Component {
  constructor (props) {
    super(props);

    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  async componentDidMount () {
    await this.props.actions.loadTodos();
  }

  async handleAddTask (text) {
    await this.props.actions.addTodo(text);
  }

  handleRemoveTask (event) {
    console.log('Remove!');
  }

  handleCompleteTask (event) {
    console.log('Done!');
  }

  render () {
    const { todos } = this.props;

    return (
      <div>
        <TodoInput
          onAddTask={this.handleAddTask}
        />
        <TodoList
          todos={todos}
          onRemoveTask={this.handleRemoveTask}
          onDoneTask={this.handleCompleteTask}
        />
      </div>
    );
  }
}

TodoContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func)
};

function mapStateToProps (state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
