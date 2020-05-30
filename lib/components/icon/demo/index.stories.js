"use strict";

var _react = require("@storybook/react");

var _react2 = _interopRequireDefault(require("react"));

var _demoContainer = require("../../helper/demo-container");

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomIcon = (0, _index.createFromIconfontCN)({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});
(0, _react.storiesOf)('通用', module).add('图标', function () {
  return /*#__PURE__*/_react2["default"].createElement(_demoContainer.DemoPanelContainer, {
    moreHref: "https://ant.design/components/icon-cn/"
  }, /*#__PURE__*/_react2["default"].createElement("h1", null, "\u9ED8\u8BA4\u56FE\u6807"), /*#__PURE__*/_react2["default"].createElement("p", null, "\u5BFC\u5165\u76F4\u63A5\u4F7F\u7528"), /*#__PURE__*/_react2["default"].createElement(_demoContainer.DemoContainer, {
    className: "components-button-demo"
  }, /*#__PURE__*/_react2["default"].createElement(_index.StepBackwardOutlined, null)), /*#__PURE__*/_react2["default"].createElement("h1", null, "\u81EA\u5B9A\u4E49\u56FE\u6807"), /*#__PURE__*/_react2["default"].createElement("p", null, "\u4ECE iconfont.cn \u5F15\u5165"), /*#__PURE__*/_react2["default"].createElement(_demoContainer.DemoContainer, {
    className: "components-button-demo"
  }, /*#__PURE__*/_react2["default"].createElement("div", null, /*#__PURE__*/_react2["default"].createElement(CustomIcon, {
    type: "icon-tuichu",
    style: {
      marginRight: '1rem'
    }
  }), /*#__PURE__*/_react2["default"].createElement(CustomIcon, {
    type: "icon-facebook",
    style: {
      marginRight: '1rem'
    }
  }), /*#__PURE__*/_react2["default"].createElement(CustomIcon, {
    type: "icon-twitter",
    style: {
      marginRight: '1rem'
    }
  }))));
});