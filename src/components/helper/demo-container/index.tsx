import React from 'react';
import './index.less';

interface IProps {
  className?: any;
  moreHref?: string;
}

export class DemoContainer extends React.Component<IProps> {
  render() {
    return <div className="demo-container">{this.props.children}</div>;
  }
}

export class DemoPanelContainer extends React.Component<IProps> {
  render() {
    const { moreHref } = this.props;

    return (
      <div className="demo-panel-container">
        {this.props.children}
        <a className="demo-panel-container-more" href={moreHref}>
          查看更多
        </a>
      </div>
    );
  }
}
