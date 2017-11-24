import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout } from 'antd';

import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <Layout.Footer>
        <section>
        </section>
        <section>
          <FormattedMessage {...messages.copyrightMessage} />
        </section>
      </Layout.Footer>
    </Wrapper>
  );
}

export default Footer;
