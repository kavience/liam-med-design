import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import Button from '../index';

storiesOf('通用', module).add('按钮', () => (
  <DemoPanelContainer moreHref="https://ant.design/components/button/">
    <h2>类型及大小</h2>
    <p>
      按钮一共有<code>link</code> 、 <code>primary</code>、<code>default</code> 、<code>dashed</code>和
      <code>ghost</code> 五种类型。 大小有 <code>small</code>、<code>middle</code>、<code>large</code> 三种情况。
    </p>
    <DemoContainer className="components-button-demo">
      <Button type="link">link</Button>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="ghost">ghost</Button>
    </DemoContainer>
  </DemoPanelContainer>
));
