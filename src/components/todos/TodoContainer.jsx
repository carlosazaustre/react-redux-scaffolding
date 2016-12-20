import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../actions/todoActions';
import Todo from './Todo';

class TodoContainer extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  async componentDidMount () {
    await this.props.actions.getTodos();
  }

  render () {
    const { todos } = this.props;

    return (
      <div>
        {todos.map(todo => (
          <span>{todo.title}</span>
        ))}
      </div>
    );
  }
}

TodoContainer.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object
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
