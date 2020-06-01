import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import { Row, Col } from '../../index';
import './index.less';

storiesOf('布局', module).add('Grid栅格', () => (
  <DemoPanelContainer moreHref="https://ant.design/components/grid-cn">
    <h1>何时使用</h1>
    <DemoContainer className="components-grid-demo">
      <Row>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12} className="components-grid-demo__active">
          col-12
        </Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8} className="components-grid-demo__active">
          col-8
        </Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6} className="components-grid-demo__active">
          col-6
        </Col>
        <Col span={6}>col-6</Col>
        <Col span={6} className="components-grid-demo__active">
          col-6
        </Col>
      </Row>
    </DemoContainer>
  </DemoPanelContainer>
));
