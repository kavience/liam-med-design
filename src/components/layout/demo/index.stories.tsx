import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
// import Affix from '../index';

storiesOf('通用', module).add('Typography排版', () => (
  <DemoPanelContainer moreHref="https://ant.design/components/affix-cn">
    <h2>何时使用</h2>
    <DemoContainer className="components-affix-demo">
      <span>TODO: 需要完善</span>
    </DemoContainer>
  </DemoPanelContainer>
));
