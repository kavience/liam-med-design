import React, { useRef, useEffect, useState } from 'react';
import { Row, Col, Button, Input, Switch, InputNumber } from 'antd';
import { isEmpty, map, get, indexOf, last, keys, isNil, join } from 'lodash';
import {
  StarOutlined,
  BorderOutlined,
  CaretDownOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import './item.less';
import { labelsArrayMapping } from './step2';

interface IProps {
  index: any;
  question: any;
  lastQuestion: any;
  onChangeIndex: any;
  onQuestionItemDelete: any;
  onQuestionItemOptionsDelete: any;
  onQuestionItemOptionsAdd: any;
  onQuestionClick: any;
}

let lastClientY = 0;

export default (props: IProps) => {
  const {
    index,
    question,
    lastQuestion,
    onChangeIndex,
    onQuestionClick,
    onQuestionItemOptionsDelete,
    onQuestionItemDelete,
    onQuestionItemOptionsAdd,
  } = props;

  const ref = useRef();
  const [hoverTargetQuestionPlace, setHoverTargetQuestionPlace] = useState('');

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [lastQuestion]);

  const handleQuestionDragOver = (e: any) => {
    const { y, height } = ref.current.getBoundingClientRect();
    const normalClientY = y + height / 2;
    const clientY = get(e, 'clientY');
    if (clientY) {
      let hoverTargetQuestionPlace = 'bottom';
      let newQuestionIndex = index;
      if (clientY < normalClientY) {
        hoverTargetQuestionPlace = 'top';
        newQuestionIndex = index - 1;
      }
      lastClientY = y + height;
      setHoverTargetQuestionPlace(hoverTargetQuestionPlace);
      onChangeIndex(newQuestionIndex);
    }
  };

  const handleQuestionDragLeave = () => {
    setHoverTargetQuestionPlace('');
  };

  const renderQuestionInput = () => {
    const { type, options } = question;
    if (indexOf(['radio'], type) > -1) {
      return map(options, (option, optionIndex) => {
        return (
          <div className="question-step-two__panel-preview-middle__question-options">
            <Input
              className="question-step-two__panel-preview-middle__question-options-input"
              addonBefore={<CheckCircleOutlined />}
              value={get(option, 'label')}
              size="small"
            />
            <MinusCircleOutlined
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                onQuestionItemOptionsDelete(index, optionIndex);
              }}
              className="question-step-two__panel-preview-middle__question-options-delete"
            />
          </div>
        );
      });
    }
    if (indexOf(['multiple'], type) > -1) {
      return map(options, (option, optionIndex) => {
        return (
          <div className="question-step-two__panel-preview-middle__question-options">
            <Input
              className="question-step-two__panel-preview-middle__question-options-input"
              addonBefore={<BorderOutlined />}
              value={get(option, 'label')}
              size="small"
            />
            <MinusCircleOutlined
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                onQuestionItemOptionsDelete(index, optionIndex);
              }}
              className="question-step-two__panel-preview-middle__question-options-delete"
            />
          </div>
        );
      });
    }
    if (indexOf(['dropdown'], type) > -1) {
      return map(options, (option, optionIndex) => {
        return (
          <div className="question-step-two__panel-preview-middle__question-options">
            <Input
              className="question-step-two__panel-preview-middle__question-options-input"
              addonBefore={<CaretDownOutlined />}
              value={get(option, 'label')}
              size="small"
            />
            <MinusCircleOutlined
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                onQuestionItemOptionsDelete(index, optionIndex);
              }}
              className="question-step-two__panel-preview-middle__question-options-delete"
            />
          </div>
        );
      });
    }
    if (indexOf(['completion'], type) > -1) {
      return (
        <div className="question-step-two__panel-preview-middle__question-options">
          <Input className="question-step-two__panel-preview-middle__question-options-input" size="small" />
        </div>
      );
    }
    if (indexOf(['descption'], type) > -1) {
      return <div className="question-step-two__panel-preview-middle__question-options"></div>;
    }
    if (indexOf(['star'], type) > -1) {
      return (
        <div className="question-step-two__panel-preview-middle__question-options">
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
          <StarOutlined />
        </div>
      );
    }
    return <></>;
  };

  const renderBottomBtns = question => {
    if (indexOf(['radio', 'multiple', 'dropdown'], get(question, 'type')) > -1) {
      return (
        <div style={{ marginTop: 20 }}>
          <Button
            size="small"
            onClick={(e: React.MouseEvent) => {
              onQuestionItemOptionsAdd(index);
            }}
          >
            添加选项
          </Button>
        </div>
      );
    }
  };

  return (
    <div
      style={
        !isEmpty(hoverTargetQuestionPlace)
          ? {
              [`border-${hoverTargetQuestionPlace}`]: '4px solid #ff0000',
            }
          : {}
      }
      ref={ref}
      className="question-step-two__panel-preview-middle__question"
      onDragOver={handleQuestionDragOver}
      onDragLeave={handleQuestionDragLeave}
      onClick={() => {
        onQuestionClick({ ...question, index });
      }}
    >
      <div className="question-step-two__panel-preview-middle__question-title">
        <h4>
          {index}.{get(labelsArrayMapping, `${get(question, 'type')}.title`)}
        </h4>
        <DeleteOutlined
          onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            e.stopPropagation();
            onQuestionItemDelete(index);
          }}
          className="question-step-two__panel-preview-middle__question-title-icon-delete"
        />
      </div>
      <div style={{ width: '90%' }}>
        <Input
          className="question-step-two__panel-preview-middle__question-options-input"
          value={get(question, 'title')}
          size="small"
        />
        {renderQuestionInput()}
      </div>
      {!isNil(get(question, 'logic')) && !isEmpty(get(question, 'logic')) && (
        <div className="question-step-two__panel-preview-middle__question-tip">
          依赖于第{get(question, 'logic.bind') + 1}题的第
          {join(
            map(get(question, 'logic.selectOption'), value => value + 1),
            '、',
          )}
          选项
        </div>
      )}
      {renderBottomBtns(question)}
    </div>
  );
};
