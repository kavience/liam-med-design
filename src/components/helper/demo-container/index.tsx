import React from 'react';
import classnames from 'classnames';
import './index.less';
import { ConfigProvider } from 'antd';
import zhCN from '../../locale/zh_CN';

interface IProps {
  className?: any;
  moreHref?: string;
}

export class DemoContainer extends React.Component<IProps> {
  render() {
    const { className } = this.props;
    return <div className={classnames('demo-container', className)}>{this.props.children}</div>;
  }
}

export class DemoPanelContainer extends React.Component<IProps> {
  render() {
    const { className, moreHref } = this.props;

    return (
      <ConfigProvider locale={zhCN}>
        <div className={classnames('demo-panel-container', className)}>
          {this.props.children}
          {moreHref && (
            <a className="demo-panel-container-more" href={moreHref}>
              查看更多
            </a>
          )}
        </div>
      </ConfigProvider>
    );
  }
}
