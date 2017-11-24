/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

/**
 * Login, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function login() {
  return {
    type: LOGIN,
  };
}

/**
 * Dispatched when the login is success and userdata is loaderd by the request saga
 *
 * @param  {object} userData The user data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function userLoaded(userData) {
  return {
    type: LOGIN_SUCCESS,
    userData,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
