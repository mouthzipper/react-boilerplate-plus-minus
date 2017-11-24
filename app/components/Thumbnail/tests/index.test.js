import React from 'react';
import { shallow } from 'enzyme';

import Thumbnail from '../index';

describe('<Thumbnail />', () => {
  it('should render thumbnail component', () => {
    const renderedComponent = shallow(
      <Thumbnail />
    );
    expect(renderedComponent.length).toEqual(1);
  });
});
