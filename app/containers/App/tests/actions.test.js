import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../constants';

import {
  login,
  userLoaded,
  loginError,
} from '../actions';

describe('App Actions', () => {
  describe('login', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGIN,
      };

      expect(login()).toEqual(expectedResult);
    });
  });

  describe('user loaded', () => {
    it('should return the correct type and the passed repos', () => {
      const userData = {
        name: 'Test',
      };
      const expectedResult = {
        type: LOGIN_SUCCESS,
        userData,
      };

      expect(userLoaded(userData)).toEqual(expectedResult);
    });
  });

  describe('login error', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOGIN_ERROR,
        error: fixture,
      };

      expect(loginError(fixture)).toEqual(expectedResult);
    });
  });
});
