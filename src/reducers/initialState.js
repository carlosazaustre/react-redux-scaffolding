import { fromJS } from 'immutable';

export default fromJS({
  todos: {}
});

/**
todos:{
  1: {
    id: 1,
    text: 'First Task',
    completed: false
  },
  2: {
    id: 2,
    text: 'A second Task',
    completed: true
  }
}
 */