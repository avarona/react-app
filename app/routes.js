import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppContainer from './containers/AppContainer.jsx';

export default () => (
  <Router>
    <Route path="/" component={AppContainer} />
  </Router>
);
