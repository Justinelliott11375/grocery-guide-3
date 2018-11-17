import axios from 'axios';
import { GET_USERS, ADD_USER, USERS_LOADING, GET_ERRORS } from './types';

export const getUsers = () => dispatch => {
  dispatch(setUsersLoading());
  axios.get('/api/users').then(res =>
    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  );
};

export const addUser = user => dispatch => {
  axios.post('/api/users', user)
  .then(res =>
    dispatch({
      type: ADD_USER,
      payload: res.data
    })
  )
  .catch(err => 
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))
};

/*export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};*/

export const setUsersLoading = () => {
  return {
    type: USERS_LOADING
  };
};