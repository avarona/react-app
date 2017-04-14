import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/root-reducer';

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// allows use of Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      createLogger({collapsed: true})
    )
  )
);
