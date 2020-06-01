import React, { useState, useEffect } from 'react';
import { Input, InputNumber } from 'antd';
import { get } from 'lodash';
import classnames from 'classnames';
import './styles/index.less';

interface IProps {
  labelBefore?: string;
  labelBeforeStyle?: object;
  labelAfterStyle?: object;
  labelAfter?: string;
  value?: any;
  style?: any;
  size?: any;
  onChange?: any;
  className?: any;
  type?: 'string' | 'number';
}

// 通用的单个输入框
export default (props: IProps) => {
  const { className = '', style = {}, labelBefore, labelBeforeStyle, labelAfterStyle, labelAfter, ...others } = props;
  const [data, setData] = useState('');
  useEffect(() => {
    const { value } = props;
    value && setData(String(value));
  }, [props.value]);

  const handleChange = (type: 'string' | 'number') => (e: any) => {
    const { onChange } = props;
    let tempData = '';
    if (type === 'string') {
      tempData = get(e, 'target.value');
    } else if (type === 'number') {
      tempData = e;
    }
    setData(tempData);
    onChange && onChange(tempData);
  };

  return (
    <div
      className={classnames('input-with-label', className)}
      style={{ display: 'flex', alignItems: 'center', ...style }}
    >
      {labelBefore && (
        <span
          style={{
            display: 'inline-block',
            marginLeft: 4,
            marginRight: 4,
            wordBreak: 'keep-all',
            ...get(props, 'labelBeforeStyle'),
          }}
        >
          {labelBefore}
        </span>
      )}
      {get(props, 'type') === 'number' ? (
        <InputNumber
          className="input-with-label_input"
          // min={0}
          {...others}
          value={Number(data)}
          onChange={handleChange('number')}
        />
      ) : (
        <Input className="input-with-label_input" {...others} value={data} onChange={handleChange('string')} />
      )}
      {labelAfter && (
        <span
          style={{
            display: 'inline-block',
            marginLeft: 4,
            marginRight: 4,
            wordBreak: 'keep-all',
            ...get(props, 'labelAfterStyle'),
          }}
        >
          {labelAfter}
        </span>
      )}
    </div>
  );
};
