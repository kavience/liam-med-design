import * as React from 'react';
import Icon, * as AntdIcons from '@ant-design/icons';
import { Radio, Input } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio/interface';
import debounce from 'lodash/debounce';
import Category from './Category';
import { FilledIcon, OutlinedIcon, TwoToneIcon } from './themeIcons';
import { categories, Categories, CategoriesKeys } from './fields';
import './index.less';

export enum ThemeType {
  Filled = 'Filled',
  Outlined = 'Outlined',
  TwoTone = 'TwoTone',
}

const allIcons: {
  [key: string]: any;
} = AntdIcons;

interface IconDisplayProps {}

interface IconDisplayState {
  theme: ThemeType;
  searchKey: string;
}

const iconTitle = {
  direction: '方向性图标',
  suggestion: '提示建议性图标',
  editor: '编辑类图标',
  data: '数据类图标',
  logo: '品牌和标识',
  other: '网站通用图标',
};

class IconDisplay extends React.Component<IconDisplayProps, IconDisplayState> {
  static categories: Categories = categories;

  static newIconNames: string[] = [];

  state: IconDisplayState = {
    theme: ThemeType.Outlined,
    searchKey: '',
  };

  constructor(props: IconDisplayProps) {
    super(props);
    this.handleSearchIcon = debounce(this.handleSearchIcon, 300);
  }

  handleChangeTheme = (e: RadioChangeEvent) => {
    this.setState({
      theme: e.target.value as ThemeType,
    });
  };

  handleSearchIcon = (searchKey: string) => {
    this.setState(prevState => ({
      ...prevState,
      searchKey,
    }));
  };

  renderCategories() {
    const { searchKey = '', theme } = this.state;

    return Object.keys(categories)
      .map((key: CategoriesKeys) => {
        let iconList = categories[key];
        if (searchKey) {
          iconList = iconList.filter(iconName => iconName.toLowerCase().includes(searchKey.toLowerCase()));
        }

        return {
          category: key,
          icons: iconList.map(iconName => iconName + theme).filter(iconName => allIcons[iconName]),
        };
      })
      .filter(({ icons }) => !!icons.length)
      .map(({ category, icons }) => (
        <Category
          key={category}
          title={iconTitle[category] || '其它'}
          theme={theme}
          icons={icons}
          newIcons={IconDisplay.newIconNames}
        />
      ));
  }

  render() {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Radio.Group value={this.state.theme} onChange={this.handleChangeTheme} size="large" buttonStyle="solid">
            <Radio.Button value={ThemeType.Outlined}>
              <Icon component={OutlinedIcon} /> 线框风格
            </Radio.Button>
            <Radio.Button value={ThemeType.Filled}>
              <Icon component={FilledIcon} /> 实底风格
            </Radio.Button>
            <Radio.Button value={ThemeType.TwoTone}>
              <Icon component={TwoToneIcon} /> 双色风格
            </Radio.Button>
          </Radio.Group>
          <Input.Search
            placeholder="在此搜索图标，点击图标可复制代码"
            style={{ margin: '0 10px', flex: 1 }}
            allowClear
            onChange={e => this.handleSearchIcon(e.currentTarget.value)}
            size="large"
            autoFocus
          />
        </div>
        {this.renderCategories()}
      </>
    );
  }
}

export default IconDisplay;
