import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import IconDisplay from './IconDisplay';
import CustomIconsDisplay from './IconDisplay/CustomIcons';

storiesOf('通用', module).add('图标', () => (
  <DemoPanelContainer moreHref="https://ant.design/components/icon-cn/">
    <h2>自定义图标</h2>
    <p>为适应业务的自定义图标，点击复制直接使用</p>
    <DemoContainer className="components-button-demo">
      <CustomIconsDisplay />
    </DemoContainer>

    <h2>antd 自带图标</h2>
    <p>点击复制直接使用</p>
    <DemoContainer className="components-button-demo">
      <IconDisplay />
    </DemoContainer>
  </DemoPanelContainer>
));
