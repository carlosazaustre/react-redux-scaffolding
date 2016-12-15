import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import 'materialize-css/dist/css/materialize.css';
import routes from './routes';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
