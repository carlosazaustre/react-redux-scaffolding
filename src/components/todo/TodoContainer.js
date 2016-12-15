import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoActions';

class TodoContainer extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { todos } = this.props;

    return (
      <div>
        <span>Hello World!</span>
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
