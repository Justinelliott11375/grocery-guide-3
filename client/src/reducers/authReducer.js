import {
    GET_USERS,
    ADD_USER,
    DELETE_ITEM,
    USER_LOADING
  } from '../actions/types';
  

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
        return {
          ...state,
          user: [action.payload, ...state.user]
        };

        default:
            return state;

    }
}