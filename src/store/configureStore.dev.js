import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, logger(), reduxImmutableStateInvariant())
);

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}
