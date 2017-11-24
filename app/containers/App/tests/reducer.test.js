import appReducer from '../reducer';
import {
  login,
  userLoaded,
  loginError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      userData: {},
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the login action correctly', () => {
    const expectedResult = {
      ...state,
      loading: true,
      error: false,
      userData: {},
    };
    expect(appReducer(state, login())).toEqual(expectedResult);
  });

  it('should handle the userLoaded action correctly', () => {
    const fixture = {
      name: 'Test',
    };
    const expectedResult = {
      ...state,
      userData: {
        name: 'Test',
      },
      loading: false,
    };
    expect(appReducer(state, userLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the loginError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = {
      ...state,
      error: fixture,
      loading: false,
    };
    expect(appReducer(state, loginError(fixture))).toEqual(expectedResult);
  });
});
