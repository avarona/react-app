import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import AppContainer from './containers/AppContainer';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={AppContainer} />
    </Route>
  </Router>
);