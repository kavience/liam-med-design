import React, { useState, useEffect, Fragment } from 'react';
import { Button, Radio, message, Form, Input, Rate, Select, Checkbox } from 'antd';
import { get, map } from 'lodash';
import { CheckOutlined, ArrowLeftOutlined, DesktopOutlined, MobileOutlined } from '@ant-design/icons';
import './step3.less';

export default props => {
  const [device, setDevice] = useState('mobile');
  const { onChangeStep } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(props.questions);
  }, []);

  const handleChange = e => {
    setDevice(get(e, 'target.value'));
  };

  const handleSubmit = () => {
    onChangeStep && onChangeStep(0);
    message.success('发布问卷成功');
  };

  const handleRadioChange = () => {
    console.log(form.getFieldsValue());
  };

  const renderFormItem = (question: any, index: any) => {
    const { options, type, title, logic } = question;
    let Component: any = <Fragment />;
    if (logic) {
      return Component;
    }
    switch (type) {
      case 'radio':
        Component = (
          <Radio.Group onChange={handleRadioChange}>
            {map(options, (option, key) => {
              return (
                <Radio style={{ display: 'block' }} key={key} value={key}>
                  {get(option, 'label')}
                </Radio>
              );
            })}
          </Radio.Group>
        );
        break;
      case 'multiple':
        Component = (
          <Checkbox.Group>
            {map(options, (option, key) => {
              return (
                <Checkbox style={{ display: 'block', margin: 0 }} key={key} value={key}>
                  {get(option, 'label')}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
        break;
      case 'dropdown':
        Component = (
          <Select>
            {map(options, (option, key) => {
              return (
                <Select.Option key={key} value={key}>
                  {get(option, 'label')}
                </Select.Option>
              );
            })}
          </Select>
        );
        break;
      case 'star':
        Component = <Rate />;
        break;
      case 'descption':
        Component = <Input.TextArea disabled />;
        break;
      default:
        Component = <Input />;
        break;
    }
    return (
      <Form.Item name={index} label={title}>
        {Component}
      </Form.Item>
    );
  };

  const renderMobileShow = () => {
    return (
      <Form layout="vertical">
        {map(props.questions, (question, index) => {
          return <Fragment key={index}>{renderFormItem(question, index)}</Fragment>;
        })}
      </Form>
    );
  };

  return (
    <div className="question-step-three__panel">
      <div className="question-step-three__panel-top">
        <Button size="small" type="primary" onClick={handleSubmit}>
          <CheckOutlined />
          发布
        </Button>
        <Button
          size="small"
          style={{ marginRight: 8 }}
          onClick={() => {
            onChangeStep && onChangeStep(1);
          }}
        >
          <ArrowLeftOutlined />
          返回
        </Button>
      </div>
      <div className="question-step-three__panel-radio">
        <Radio.Group onChange={handleChange} value={device}>
          <Radio.Button value="mobile">
            <MobileOutlined style={{ marginRight: 5 }} />
            手机
          </Radio.Button>
          <Radio.Button value="compute">
            <DesktopOutlined style={{ marginRight: 5 }} />
            电脑
          </Radio.Button>
        </Radio.Group>
      </div>

      {device === 'mobile' && (
        <div className="question-step-three__panel-mobile">
          <div className="question-step-three__panel-mobile-preview">
            <div className="question-step-three__panel-mobile-preview_content">{renderMobileShow()}</div>
          </div>
        </div>
      )}
      {device === 'compute' && <div className="question-step-three__panel-compute">电脑端</div>}
    </div>
  );
};
