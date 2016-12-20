import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../actions/todoActions';
import TodoList from './TodoList';

class TodoContainer extends React.Component {
  constructor (props) {
    super(props);

    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleDoneTask = this.handleDoneTask.bind(this);
  }

  async componentDidMount () {
    await this.props.actions.getTodos();
  }

  handleRemoveTask (event) {
    console.log('Remove');
  }

  handleDoneTask (event) {
    console.log('Done!');
  }

  render () {
    const { todos } = this.props;

    return (
      <TodoList
        todos={todos}
        onRemoveTask={this.handleRemoveTask}
        onDoneTask={this.handleDoneTask}
      />
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
