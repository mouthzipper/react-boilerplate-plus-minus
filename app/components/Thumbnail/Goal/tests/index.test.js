import React from 'react';
import { shallow } from 'enzyme';

import GoalThumbnail from '../index';

describe('<GoalThumbnail />', () => {
  it('should render onboarding thumbnail component', () => {
    const renderedComponent = shallow(
      <GoalThumbnail />
    );
    expect(renderedComponent.length).toEqual(1);
  });
});
