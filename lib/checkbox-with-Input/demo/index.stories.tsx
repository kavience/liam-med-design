import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import CheckboxWithInput from '../';

storiesOf('表单相关', module).add('Checkbox 带输入', () => (
  <DemoPanelContainer>
    <h2>单选带输入</h2>
    <p>返回格式请打开控制台查看</p>
    <DemoContainer className="components-affix-demo">
      <CheckboxWithInput
        type="single"
        onChange={data => {
          console.log(data);
        }}
        options={[
          { value: false, label: '否', span: 6, withInput: false },
          {
            value: true,
            label: '是',
            withInput: true,
            span: 6,
            inputSpan: 12,
            enterType: 'number',
            labelBefore: '',
            labelAfter: '根',
          },
        ]}
      />
    </DemoContainer>
    <h2>多选带输入</h2>
    <p>数据返回格式与 options 有关</p>
    <DemoContainer className="components-affix-demo">
      <CheckboxWithInput
        type="multiple"
        onChange={data => {
          console.log(data);
        }}
        options={[
          { value: 'no', label: '无', withInput: false, resetAll: true },
          {
            value: 'medicine',
            label: '药物',
            withInput: true,
            exceptionStyle: { checkboxStyle: { color: '#ff0000' }, inputStyle: { borderColor: '#ff0000' } },
          },
          {
            value: 'food',
            label: '食物',
            withInput: true,
            exceptionStyle: { checkboxStyle: { color: '#ff0000' }, inputStyle: { borderColor: '#ff0000' } },
          },
          {
            value: 'other',
            label: '其它',
            withInput: true,
            exceptionStyle: { checkboxStyle: { color: '#ff0000' }, inputStyle: { borderColor: '#ff0000' } },
          },
        ]}
      />
    </DemoContainer>
  </DemoPanelContainer>
));
