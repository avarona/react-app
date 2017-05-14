import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SIGN_UP = 'SIGN_UP';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

/* ------------   ACTION CREATORS     ----------------- */

export const signUp = (user) => ({
  type: SIGN_UP,
  user
});

export const login = (user) => ({
  type: LOGIN,
  user
})

export const logout = () => ({
  type: LOGOUT
});

/* -------------       API CALLS     ------------------- */

export const createUser = (user) =>
  dispatch =>
    axios.post('/api/auth/signup', user)
      .then(response => {
        dispatch(signUp(response.data))
      })
      .catch(err => console.error(err));

export const loginUser = (user) =>
  dispatch =>
    axios.post('api/auth/login', user)
      .then(response => {
        dispatch(login(response.data))
      })
      .catch(err => console.error(err));

export const logoutUser = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(logout()))
      .catch(err => console.error(err));

/* -------------       REDUCER     ------------------- */

const reducer = (state = null, action) => {

  switch (action.type){
    case SIGN_UP:
      return Object.assign({}, {
        fullName: action.user.fullName,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email
      });
    case LOGIN:
      return Object.assign({}, {
        fullName: action.user.fullName,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email
      });
    case LOGOUT:
      return null;
    default:
      return state;
    }
};

export default reducer;
