import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import Questionnaire from '../';
import { message } from 'antd';

const mockTemplateList = [
  {
    id: '1001',
    title: '水果大调查',
    hospital: '华侨医院',
    description: '自动发送复诊提醒 · 管理复诊结果',
    questionnaire: {
      questionsTitle: '蔬菜水果大调查',
      questionsDescription: '请帮助我们完成调查',
      questions: [
        {
          type: 'radio',
          title: '你喜欢水果还是蔬菜？',
          options: [
            {
              label: '水果',
            },
            {
              label: '蔬菜',
            },
          ],
        },
        {
          type: 'multiple',
          title: '你喜欢什么水果？',
          logic: {
            bind: 0,
            selectOption: [0],
          },
          options: [
            {
              label: '苹果',
            },
            {
              label: '菠萝',
            },
            {
              label: '葡萄',
            },
          ],
        },
        {
          type: 'radio',
          title: '你会吃苹果皮吗？',
          logic: {
            bind: 1,
            selectOption: [0],
          },
          options: [
            {
              label: '会',
            },
            {
              label: '不会',
            },
          ],
        },
        {
          type: 'dropdown',
          title: '你喜欢小白菜还是大白菜？',
          logic: {
            bind: 0,
            selectOption: [1],
          },
          options: [
            {
              label: '小白菜',
            },
            {
              label: '大白菜',
            },
          ],
        },
        {
          type: 'completion',
          title: '请输入你喜欢大白菜的理由',
          options: '大白菜好吃啊',
          logic: {
            bind: 3,
            selectOption: [1],
          },
        },
        {
          type: 'descption',
          title:
            '西域是中西交通要道,众多水果蔬菜经过西域传入中国,出现在我们的餐桌上。 西瓜,就是西域瓜的简称。明代徐光启在《农政全书》中说:“西瓜,种出西域...',
        },
        {
          type: 'star',
          title: '你愿意给我们打几分呢？',
        },
      ],
    },
  },
  {
    id: '1002',
    title: '生活环境调查',
    hospital: '珠江医院',
    description: '自动发送复诊提醒 · 管理复诊结果',
    questionnaire: {
      questionsTitle: '蔬菜水果大调查',
      questionsDescription: '请帮助我们完成调查',
      questions: [
        {
          type: 'radio',
          title: '你喜欢水果还是蔬菜？',
          options: [
            {
              label: '水果',
            },
            {
              label: '蔬菜',
            },
          ],
        },
        {
          type: 'multiple',
          title: '你喜欢什么水果？',
          logic: {
            bind: 0,
            selectOption: [0],
          },
          options: [
            {
              label: '苹果',
            },
            {
              label: '菠萝',
            },
            {
              label: '葡萄',
            },
          ],
        },
        {
          type: 'radio',
          title: '你会吃苹果皮吗？',
          logic: {
            bind: 1,
            selectOption: [0],
          },
          options: [
            {
              label: '会',
            },
            {
              label: '不会',
            },
          ],
        },
        {
          type: 'dropdown',
          title: '你喜欢小白菜还是大白菜？',
          logic: {
            bind: 0,
            selectOption: [1],
          },
          options: [
            {
              label: '小白菜',
            },
            {
              label: '大白菜',
            },
          ],
        },
        {
          type: 'completion',
          title: '请输入你喜欢大白菜的理由',
          options: '大白菜好吃啊',
          logic: {
            bind: 3,
            selectOption: [1],
          },
        },
        {
          type: 'descption',
          title:
            '西域是中西交通要道,众多水果蔬菜经过西域传入中国,出现在我们的餐桌上。 西瓜,就是西域瓜的简称。明代徐光启在《农政全书》中说:“西瓜,种出西域...',
        },
        {
          type: 'star',
          title: '你愿意给我们打几分呢？',
        },
      ],
    },
  },
];

storiesOf('其它', module).add('questionnaire 问卷调查', () => (
  <DemoPanelContainer>
    <h2>何时使用</h2>
    <DemoContainer className="components-affix-demo">
      <Questionnaire
        templateList={mockTemplateList}
        onDeleteTemplate={questionnaire => {
          // TODO: delete template
          console.log(questionnaire);
          message.success('删除问卷成功');
        }}
        onSaveTemplate={questionnaire => {
          // TODO: save template
          console.log(questionnaire);
          message.success('保存问卷成功');
        }}
        onCreateTemplate={questionnaire => {
          // TODO: save template
          console.log(questionnaire);
          message.success('新增问卷成功');
        }}
        // onDeploy={questionnaire => {
        //   // TODO: do deploy
        //   console.log(questionnaire);
        //   message.success('问卷发布成功');
        // }}
      />
    </DemoContainer>
  </DemoPanelContainer>
));
