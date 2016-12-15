import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App'
import TodoContainer from './components/todo/TodoContainer'
import SectionContainer from './components/section/SectionContainer'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodoContainer} />
    <Route path="/section" component={SectionContainer} />
  </Route>
);
