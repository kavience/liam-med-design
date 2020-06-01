import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import InputWithLabel from '../';
import './index.less';

storiesOf('表单相关', module).add('input 带前后缀', () => (
  <DemoPanelContainer>
    <h2>何时使用</h2>
    <DemoContainer className="components-input-with-label-demo">
      <InputWithLabel labelBefore="前缀" />
      <InputWithLabel labelAfter="后缀" />
    </DemoContainer>
  </DemoPanelContainer>
));
