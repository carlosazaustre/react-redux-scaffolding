import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../actions/todoActions';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class TodoContainer extends React.Component {
  constructor (props) {
    super(props);

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  async componentDidMount () {
    await this.props.actions.loadTodos();
  }

  async handleAddTask (text) {
    await this.props.actions.addTodo(text);
  }

  async handleDeleteTask (todoId) {
    await this.props.actions.deleteTodo(todoId);
  }

  async handleCompleteTask (todoId) {
    await this.props.actions.updateTodo(todoId);
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
          onDeleteTask={this.handleDeleteTask}
          onCompleteTask={this.handleCompleteTask}
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
