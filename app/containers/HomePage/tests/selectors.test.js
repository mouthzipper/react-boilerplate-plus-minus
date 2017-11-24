import {
  selectHome,
  makeSelectName,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      name: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectName', () => {
  const usernameSelector = makeSelectName();
  it('should select the name', () => {
    const name = 'test';
    const mockedState = {
      home: {
        name,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(name);
  });
});
