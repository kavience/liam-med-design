import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import { StepBackwardOutlined, createFromIconfontCN } from '../index';

const CustomIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

storiesOf('通用', module).add('图标', () => (
  <DemoPanelContainer moreHref="https://ant.design/components/icon-cn/">
    <h1>默认图标</h1>
    <p>导入直接使用</p>
    <DemoContainer className="components-button-demo">
      <StepBackwardOutlined />
    </DemoContainer>
    <h1>自定义图标</h1>
    <p>从 iconfont.cn 引入</p>
    <DemoContainer className="components-button-demo">
      <div>
        <CustomIcon type="icon-tuichu" style={{ marginRight: '1rem' }} />
        <CustomIcon type="icon-facebook" style={{ marginRight: '1rem' }} />
        <CustomIcon type="icon-twitter" style={{ marginRight: '1rem' }} />
      </div>
    </DemoContainer>
  </DemoPanelContainer>
));
