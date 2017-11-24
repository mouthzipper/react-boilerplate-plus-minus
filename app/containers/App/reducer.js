/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  userData: {},
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        error: false,
        userData: {},
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.userData,
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}

export default appReducer;
