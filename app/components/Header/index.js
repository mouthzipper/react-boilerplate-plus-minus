import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import Logo from './logo.svg';
import Img from './Img';
import messages from './messages';
import HeaderLink from './HeaderLink';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Layout.Header>
        <Link to="/">
          <Img src={Logo} alt=""></Img>
        </Link>
        <Menu
          theme="ligth"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{ lineHeight: '80px' }}
        >
          <Menu.Item key="1">
            <HeaderLink to="/aboutus">
              <FormattedMessage {...messages.aboutUs} />
            </HeaderLink>
          </Menu.Item>
          <Menu.Item key="2">
            <HeaderLink to="/portfolios">
              <FormattedMessage {...messages.portfolios} />
            </HeaderLink>
          </Menu.Item>
          <Menu.Item key="3">
            <HeaderLink to="/pricing">
              <FormattedMessage {...messages.pricing} />
            </HeaderLink>
          </Menu.Item>
          <Menu.Item key="4">
            <HeaderLink to="/contactus">
              <FormattedMessage {...messages.contactUs} />
            </HeaderLink>
          </Menu.Item>
        </Menu>
      </Layout.Header>
    );
  }
}

export default Header;
