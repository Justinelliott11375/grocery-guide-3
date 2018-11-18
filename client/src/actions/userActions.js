import axios from 'axios';
import setAuthToken from '../utilities/setAuthToken';
import jwtDecode from 'jwt-decode';
import { GET_USERS, ADD_USER, SET_CURRENT_USER, USERS_LOADING, GET_ERRORS } from './types';


export const getUsers = () => dispatch => {
  dispatch(setUsersLoading());
  axios.get('/api/users').then(res =>
    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  );
};

// add user
export const addUser = user => dispatch => {
  axios.post('/api/users', user)
  .then(res =>
    dispatch({
      type: ADD_USER,
      payload: res.data
    })
  )
  .catch(err => 
     console.log("error: " + err)
    /*dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })*/)
};

// log in user with token
export const loginUser = user => dispatch => {
  axios
    .post('/api/users/login', user)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};


export const setUsersLoading = () => {
  return {
    type: USERS_LOADING
  };
};
