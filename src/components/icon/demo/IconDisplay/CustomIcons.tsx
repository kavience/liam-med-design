import React, { Component } from 'react';
import iconTypes from './CustomIconsType';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CustomIcon } from '../..';
import Badge from '../../../badge';
import message from '../../../message';

export default class CustomIcons extends Component {
  handleCopy = iconType => text => {
    message.success(
      <span>
        <code className="copied-code">{text}</code> 复制成功 🎉
      </span>,
    );
  };

  render() {
    return (
      <ul className="anticons-list">
        {iconTypes.map(iconType => (
          <CopyToClipboard text={`<CustomIcon type="${iconType}" />`} onCopy={this.handleCopy(iconType)}>
            <li>
              <CustomIcon type={iconType} />
              <span className="anticon-class">
                <Badge>{iconType}</Badge>
              </span>
            </li>
          </CopyToClipboard>
        ))}
      </ul>
    );
  }
}
