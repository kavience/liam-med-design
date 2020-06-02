# lian-med-design

lian-med-desin 是基于 ant-design 二次开发的组件库，99% 覆盖 ant-design, 并且增加额外的内部需要的组件库

## 目录结构

```bash
|- .storybook                    # storybook 组件库展示
|- .lib                    # 编译后的组件库
|- node_modules             # 引用的 node 包
|- src                      # 项目文件
    |-- components          # 项目组件
|- .babelrc.js              # babel 编译配置
|- ...                      # 其它不重要文件

```

## 项目使用

#### 安装

```bash
yarn add git+https://github.com/kavience/lian-med-design.git#v1.0.0
# or
npm install git+https://github.com/kavience/lian-med-design.git#v1.0.0
```

#### 使用

```javascript
import { Button } from 'lian-med-design';

// 与 ant-design 同样使用
....

```

## 项目启动

#### 查看 demo

```bash
yarn demo
# or
npm run demo
```

#### 编译代码

```
yarn build
# or
npm run build
```

## TODO:
完善使用 demo
