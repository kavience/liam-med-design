import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
// import Affix from '../index';

storiesOf('反馈', module).add('Spin加载中', () => (
  <DemoPanelContainer moreHref="https://ant.design/components/affix-cn">
    <h1>何时使用</h1>
    <DemoContainer className="components-affix-demo">
      <span>TODO: 需要完善</span>
    </DemoContainer>
  </DemoPanelContainer>
));
