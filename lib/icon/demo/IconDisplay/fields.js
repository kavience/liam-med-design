"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.categories = void 0;

var AntdIcons = _interopRequireWildcard(require("@ant-design/icons/lib/icons"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var all = Object.keys(AntdIcons).map(function (n) {
  return n.replace(/(Outlined|Filled|TwoTone)$/, '');
}).filter(function (n, i, arr) {
  return arr.indexOf(n) === i;
});
var direction = ['StepBackward', 'StepForward', 'FastBackward', 'FastForward', 'Shrink', 'ArrowsAlt', 'Down', 'Up', 'Left', 'Right', 'CaretUp', 'CaretDown', 'CaretLeft', 'CaretRight', 'UpCircle', 'DownCircle', 'LeftCircle', 'RightCircle', 'DoubleRight', 'DoubleLeft', 'VerticalLeft', 'VerticalRight', 'VerticalAlignTop', 'VerticalAlignMiddle', 'VerticalAlignBottom', 'Forward', 'Backward', 'Rollback', 'Enter', 'Retweet', 'Swap', 'SwapLeft', 'SwapRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PlayCircle', 'UpSquare', 'DownSquare', 'LeftSquare', 'RightSquare', 'Login', 'Logout', 'MenuFold', 'MenuUnfold', 'BorderBottom', 'BorderHorizontal', 'BorderInner', 'BorderOuter', 'BorderLeft', 'BorderRight', 'BorderTop', 'BorderVerticle', 'PicCenter', 'PicLeft', 'PicRight', 'RadiusBottomleft', 'RadiusBottomright', 'RadiusUpleft', 'RadiusUpright', 'Fullscreen', 'FullscreenExit'];
var suggestion = ['Question', 'QuestionCircle', 'Plus', 'PlusCircle', 'Pause', 'PauseCircle', 'Minus', 'MinusCircle', 'PlusSquare', 'MinusSquare', 'Info', 'InfoCircle', 'Exclamation', 'ExclamationCircle', 'Close', 'CloseCircle', 'CloseSquare', 'Check', 'CheckCircle', 'CheckSquare', 'ClockCircle', 'Warning', 'IssuesClose', 'Stop'];
var editor = ['Edit', 'Form', 'Copy', 'Scissor', 'Delete', 'Snippets', 'Diff', 'Highlight', 'AlignCenter', 'AlignLeft', 'AlignRight', 'BgColors', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Redo', 'Undo', 'ZoomIn', 'ZoomOut', 'FontColors', 'FontSize', 'LineHeight', 'Dash', 'SmallDash', 'SortAscending', 'SortDescending', 'Drag', 'OrderedList', 'UnorderedList', 'RadiusSetting', 'ColumnWidth', 'ColumnHeight'];
var data = ['AreaChart', 'PieChart', 'BarChart', 'DotChart', 'LineChart', 'RadarChart', 'HeatMap', 'Fall', 'Rise', 'Stock', 'BoxPlot', 'Fund', 'Sliders'];
var logo = ['Android', 'Apple', 'Windows', 'Ie', 'Chrome', 'Github', 'Aliwangwang', 'Dingding', 'WeiboSquare', 'WeiboCircle', 'TaobaoCircle', 'Html5', 'Weibo', 'Twitter', 'Wechat', 'Youtube', 'AlipayCircle', 'Taobao', 'Skype', 'Qq', 'MediumWorkmark', 'Gitlab', 'Medium', 'Linkedin', 'GooglePlus', 'Dropbox', 'Facebook', 'Codepen', 'CodeSandbox', 'CodeSandboxCircle', 'Amazon', 'Google', 'CodepenCircle', 'Alipay', 'AntDesign', 'AntCloud', 'Aliyun', 'Zhihu', 'Slack', 'SlackSquare', 'Behance', 'BehanceSquare', 'Dribbble', 'DribbbleSquare', 'Instagram', 'Yuque', 'Alibaba', 'Yahoo', 'Reddit', 'Sketch'];
var datum = [].concat(direction, suggestion, editor, data, logo);
var other = all.filter(function (n) {
  return !datum.includes(n);
});
var categories = {
  direction: direction,
  suggestion: suggestion,
  editor: editor,
  data: data,
  logo: logo,
  other: other
};
exports.categories = categories;
var _default = categories;
exports["default"] = _default;