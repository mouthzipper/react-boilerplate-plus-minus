import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import Footer from '../index';

describe('<Footer />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Footer />);
  });

  it('should render the copyright notice', () => {
    expect(renderedComponent.contains(
      <section>
        <FormattedMessage {...messages.copyrightMessage} />
      </section>
    )).toBe(true);
  });
});
