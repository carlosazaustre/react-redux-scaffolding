import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App'
import MainContainer from './components/main/MainContainer'
import SectionContainer from './components/section/SectionContainer'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainContainer} />
    <Route path="/section" component={SectionContainer} />
  </Route>
);
