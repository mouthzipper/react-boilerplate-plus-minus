import React from 'react';
import { shallow } from 'enzyme';

import OnBoardingThumbnail from '../index';

describe('<OnBoardingThumbnail />', () => {
  it('should render onboarding thumbnail component', () => {
    const renderedComponent = shallow(
      <OnBoardingThumbnail />
    );
    expect(renderedComponent.length).toEqual(1);
  });
});
