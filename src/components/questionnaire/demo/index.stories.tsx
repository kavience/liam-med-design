import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import Questionnaire from '../';

storiesOf('其它', module).add('questionnaire 问卷调查', () => (
  <DemoPanelContainer>
    <h2>何时使用</h2>
    <DemoContainer className="components-affix-demo">
      <Questionnaire />
    </DemoContainer>
  </DemoPanelContainer>
));
