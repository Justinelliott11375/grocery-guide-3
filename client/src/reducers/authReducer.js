import isEmpty from '../validations/is-empty';
import {
    ADD_USER, 
    SET_CURRENT_USER,
  } from '../actions/types';
  

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
        return {
          ...state,
          user: [action.payload, state.user]
        };
        case SET_CURRENT_USER:
      return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        };

        default:
            return state;

    }
}