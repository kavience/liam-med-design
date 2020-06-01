import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import Affix from '../index';

storiesOf('导航', module).add('Affix 固钉', () => (
  <DemoPanelContainer moreHref="https://ant.design/components/affix-cn">
    <h2>何时使用</h2>
    <p>
      当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
      页面可视范围过小时，慎用此功能以免遮挡页面内容
    </p>
    <DemoContainer className="components-affix-demo">
      <span>TODO: 需要完善</span>
    </DemoContainer>
  </DemoPanelContainer>
));
