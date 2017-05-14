import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import auth from './reducers/auth';
import example from './reducers/example';

const store = combineReducers({
  auth,
  example
});

export default store;
