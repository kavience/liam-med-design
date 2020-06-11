import React, { useState, useEffect, Fragment } from 'react';
import { Button, Radio, message, Form, Input, Rate, Select, Checkbox, notification } from 'antd';
import { get, map, indexOf, isArray, keys } from 'lodash';
import { DesktopOutlined, MobileOutlined } from '@ant-design/icons';
import './step3.less';

export default (props: any) => {
  const [device, setDevice] = useState('mobile');
  const [globalLogic, setGlobalLogic] = useState([]);
  const { data, onChangeStep, onDeploy } = props;
  const { questions, questionsTitle, questionsDescription } = data;
  const [form] = Form.useForm();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    refresh && setTimeout(() => setRefresh(false));
  }, [refresh]);

  useEffect(() => {
    const newGlobalLogic: any = [...globalLogic];
    map(questions, (question, index) => {
      const { logic } = question;
      if (logic) {
        newGlobalLogic.push({ bindIndex: get(logic, 'bind'), index });
      }
    });
    setGlobalLogic(newGlobalLogic);
  }, []);

  const handleChange = e => {
    setDevice(get(e, 'target.value'));
  };

  const handleSubmit = () => {
    onChangeStep && onChangeStep(0);
    onDeploy && onDeploy(data);
  };

  const handleMockSubmit = () => {
    notification.error({
      message: '不可提交',
      description: '此为预览模式，无法提交',
    });
  };

  const handleValuesChange = (values, allValues) => {
    const changedKey = get(keys(values), 0);
    map(globalLogic, ({ bindIndex, index }) => {
      if (changedKey == bindIndex) {
        form.setFieldsValue({
          [index]: undefined,
        });
      }
    });
    setRefresh(true);
  };

  const renderFormItem = (question: any, index: any) => {
    const { options, type, title, logic } = question;
    let itemStyle = {};
    let Component: any = <Fragment />;
    const bindIndex = get(logic, 'bind');
    const bindIndexSelectOption = get(logic, 'selectOption');
    const formItemValue = form.getFieldValue(bindIndex);
    if (logic) {
      itemStyle = {
        display: 'none',
      };
      if (isArray(formItemValue)) {
        map(formItemValue, itemOption => {
          if (indexOf(bindIndexSelectOption, itemOption) > -1) {
            itemStyle = {};
          }
        });
      } else {
        if (indexOf(bindIndexSelectOption, formItemValue) > -1) {
          itemStyle = {};
        }
      }
    }
    switch (type) {
      case 'radio':
        Component = (
          <Radio.Group>
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
        break;
      default:
        Component = <Input />;
        break;
    }
    return (
      <Form.Item style={itemStyle} name={index} label={`${index + 1}.${title}`}>
        {Component}
      </Form.Item>
    );
  };

  const renderMobileShow = () => {
    return (
      <Form form={form} layout="vertical" onValuesChange={handleValuesChange}>
        <div className="questions-title">{questionsTitle}</div>
        <div className="questions-desc">{questionsDescription}</div>
        {map(questions, (question, index) => {
          return <Fragment key={index}>{renderFormItem(question, index)}</Fragment>;
        })}
        <Form.Item>
          <Button type="primary" onClick={handleMockSubmit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  };

  const renderComputeShow = () => {
    return (
      <Form form={form} layout="vertical" onValuesChange={handleValuesChange}>
        <div className="questions-title">{questionsTitle}</div>
        <div className="questions-desc">{questionsDescription}</div>
        {map(questions, (question, index) => {
          return <Fragment key={index}>{renderFormItem(question, index)}</Fragment>;
        })}
        <Form.Item>
          <Button type="primary" onClick={handleMockSubmit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <div className="question-step-three__panel">
      <div className="question-step-three__panel-top">
        <Button type="primary" onClick={handleSubmit}>
          发布
        </Button>
        <Button
          style={{ marginRight: 8 }}
          onClick={() => {
            onChangeStep && onChangeStep(1);
          }}
        >
          上一步
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
      {device === 'compute' && <div className="question-step-three__panel-compute">{renderComputeShow()}</div>}
    </div>
  );
};
