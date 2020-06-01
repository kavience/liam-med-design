import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import { StepBackwardOutlined, CustomIcon } from '../index';

storiesOf('通用', module).add('图标', () => (
  <DemoPanelContainer moreHref="https://ant.design/components/icon-cn/">
    <h2>默认图标</h2>
    <p>导入直接使用</p>
    <DemoContainer className="components-button-demo">
      <StepBackwardOutlined />
    </DemoContainer>
    <h2>自定义图标</h2>
    <p>从 iconfont.cn 引入</p>
    <DemoContainer className="components-button-demo">
      <div>
        <CustomIcon type="icon-Highrisk1" style={{ marginRight: '1rem' }} />
        <CustomIcon type="icon-identity1" style={{ marginRight: '1rem' }} />
        <CustomIcon type="icon-report" style={{ marginRight: '1rem' }} />
      </div>
    </DemoContainer>
  </DemoPanelContainer>
));
