import React, { useState, useEffect } from 'react';
import { get, map, set, isEmpty } from 'lodash';
import InputWithLabel from '../input-with-label';
import classnames from 'classnames';

export interface Option {
  enterType?: 'string' | 'number';
  labelBefore: string;
  labelAfter: string;
}

interface IProps {
  options: Option[];
  onChange?: any;
  value?: any;
  type?: 'string' | 'number';
  needWrapper?: boolean;
  className?: any;
  style?: any;
}

// 通用的多个输入框
export default (props: IProps) => {
  const { className, style } = props;
  const { options } = props;
  const [data, setData] = useState({});

  useEffect(() => {
    const { value } = props;
    !isEmpty(value) && setData(value);
  }, [props.value]);

  const handleChange = (index: any) => (result: any) => {
    const { onChange } = props;
    set(data, index, result);
    setData(data);
    onChange && onChange(data);
  };

  const renderContent = () => {
    return map(options as any, (option, index) => {
      return (
        <InputWithLabel
          {...props}
          key={index}
          value={get(data, index)}
          onChange={handleChange(index)}
          type={get(option, 'enterType') ? get(option, 'enterType') : get(props, 'type')}
          labelBefore={get(option, 'labelBefore')}
          labelAfter={get(option, 'labelAfter')}
        />
      );
    });
  };

  return props.needWrapper ? (
    <div
      className={classnames('multiple-input-with-label', className)}
      style={{ display: 'flex', alignItems: 'center', ...style }}
    >
      <span style={{ display: 'inline-block', marginRight: 4 }}>( </span>
      {renderContent()}
      <span style={{ display: 'inline-block', marginLeft: 4 }}> )</span>
    </div>
  ) : (
    <div
      className={classnames('multiple-input-with-label', className)}
      style={{ display: 'flex', alignItems: 'center', ...style }}
    >
      {renderContent()}
    </div>
  );
};
