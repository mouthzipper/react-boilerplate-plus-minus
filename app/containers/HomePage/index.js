/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'antd';

import Button from '../../components/Button';
import A from '../../components/A';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  showLog() {
    console.log('teste');
  }


  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="rbpm Demo homepage" />
        </Helmet>
        <div>
          <Row type="flex" justify="center">
            <Col span={4}><Button primary onClick={this.showLog}>Primary</Button></Col>
            <Col span={4}><Button primary inverse>Primary 1 inverse</Button></Col>
            <Col span={4}><Button primary large>Primary Large</Button></Col>
            <Col span={4}><Button primary inverse large>Primary Large inverse</Button></Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span={12}><Button secondary>Secondary</Button></Col>
            <Col span={6}><A primary>This is a primary link</A></Col>
            <Col span={6}><A>This is a secondary` link</A></Col>
          </Row>
        </div>
      </article>
    );
  }
}

export default HomePage;
