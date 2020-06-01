import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import MultipleInputWithLabel from '../';

storiesOf('表单相关', module).add('input 带多个输入框', () => (
  <DemoPanelContainer>
    <h2>默认</h2>
    <DemoContainer className="components-affix-demo">
      <MultipleInputWithLabel
        options={[
          {
            labelBefore: '姓名',
            labelAfter: ',',
          },
          {
            labelBefore: '年龄',
            labelAfter: '岁',
          },
        ]}
      />
    </DemoContainer>
    <h2>多个数字类型输入</h2>
    <DemoContainer className="components-affix-demo">
      <MultipleInputWithLabel
        type="number"
        options={[
          {
            labelBefore: '身高',
            labelAfter: 'cm,',
          },
          {
            labelBefore: '体重',
            labelAfter: 'kg',
          },
        ]}
      />
    </DemoContainer>
    <h2>数字类型和字符串混合输入</h2>
    <DemoContainer className="components-affix-demo">
      <MultipleInputWithLabel
        type="number"
        options={[
          {
            enterType: 'string',
            labelBefore: '姓名',
            labelAfter: ',',
          },
          {
            enterType: 'number',
            labelBefore: '体重',
            labelAfter: 'kg',
          },
        ]}
      />
    </DemoContainer>
  </DemoPanelContainer>
));
