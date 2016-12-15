import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todo from './todoReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  todo
});

export default rootReducer;
