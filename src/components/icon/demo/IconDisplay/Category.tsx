import * as React from 'react';
import { message } from 'antd';
import CopyableIcon from './CopyableIcon';
import { ThemeType } from './index';

interface CategoryProps {
  title: string;
  icons: string[];
  theme: ThemeType;
  newIcons: string[];
}

interface CategoryState {
  justCopied: string | null;
}

class Category extends React.Component<CategoryProps, CategoryState> {
  copyId?: number;

  state = {
    justCopied: null,
  };

  componentWillUnmount() {
    window.clearTimeout(this.copyId);
  }

  onCopied = (type: string, text: string) => {
    message.success(
      <span>
        <code className="copied-code">{text}</code> 复制成功 🎉
      </span>,
    );
    this.setState({ justCopied: type }, () => {
      this.copyId = window.setTimeout(() => {
        this.setState({ justCopied: null });
      }, 2000);
    });
  };

  render() {
    const { icons, title, newIcons, theme } = this.props;
    const items = icons.map(name => {
      return (
        <CopyableIcon
          key={name}
          name={name}
          theme={theme}
          isNew={newIcons.indexOf(name) >= 0}
          justCopied={this.state.justCopied}
          onCopied={this.onCopied}
        />
      );
    });

    return (
      <div style={{ marginTop: 10 }}>
        <h3>{title}</h3>
        <ul className="anticons-list">{items}</ul>
      </div>
    );
  }
}

export default Category;
