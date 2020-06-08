import { storiesOf } from '@storybook/react';
import React from 'react';
import { DemoContainer, DemoPanelContainer } from '../../helper/demo-container';
import Editor from '../';

class EditorDemo extends React.Component {
  handleChange = (value: any) => {
    console.log(value);
  };

  render() {
    return <Editor style={{ width: '100%', height: 300 }} onChange={this.handleChange} />;
  }
}

storiesOf('表单相关', module).add('Editor 富文本输入框', () => (
  <DemoPanelContainer moreHref="https://github.com/margox/braft-editor">
    <h2>基本使用</h2>
    <DemoContainer className="components-affix-demo">
      <EditorDemo />
    </DemoContainer>
  </DemoPanelContainer>
));
