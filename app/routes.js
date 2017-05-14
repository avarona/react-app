import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import AppContainer from './containers/AppContainer.jsx';
import SignUp from './containers/SignUp.jsx';

export default () => (
  <Router>
    <AppContainer>
      <Route path="/" component={SignUp} />
    </AppContainer>
  </Router>
);
