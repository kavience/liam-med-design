"use strict";

var _react = require("@storybook/react");

var _react2 = _interopRequireDefault(require("react"));

var _demoContainer = require("../../helper/demo-container");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react.storiesOf)('通用', module).add('按钮', function () {
  return /*#__PURE__*/_react2["default"].createElement(_demoContainer.DemoPanelContainer, {
    moreHref: "https://ant.design/components/button/"
  }, /*#__PURE__*/_react2["default"].createElement("h1", null, "\u7C7B\u578B\u53CA\u5927\u5C0F"), /*#__PURE__*/_react2["default"].createElement("p", null, "\u6309\u94AE\u4E00\u5171\u6709", /*#__PURE__*/_react2["default"].createElement("code", null, "link"), " \u3001 ", /*#__PURE__*/_react2["default"].createElement("code", null, "primary"), "\u3001", /*#__PURE__*/_react2["default"].createElement("code", null, "default"), " \u3001", /*#__PURE__*/_react2["default"].createElement("code", null, "dashed"), "\u548C", /*#__PURE__*/_react2["default"].createElement("code", null, "ghost"), " \u4E94\u79CD\u7C7B\u578B\u3002 \u5927\u5C0F\u6709 ", /*#__PURE__*/_react2["default"].createElement("code", null, "small"), "\u3001", /*#__PURE__*/_react2["default"].createElement("code", null, "middle"), "\u3001", /*#__PURE__*/_react2["default"].createElement("code", null, "large"), " \u4E09\u79CD\u60C5\u51B5\u3002"), /*#__PURE__*/_react2["default"].createElement(_demoContainer.DemoContainer, {
    className: "components-button-demo"
  }, /*#__PURE__*/_react2["default"].createElement(_index["default"], {
    type: "link"
  }, "link"), /*#__PURE__*/_react2["default"].createElement(_index["default"], null, "Default"), /*#__PURE__*/_react2["default"].createElement(_index["default"], {
    type: "primary"
  }, "Primary"), /*#__PURE__*/_react2["default"].createElement(_index["default"], {
    type: "dashed"
  }, "Dashed"), /*#__PURE__*/_react2["default"].createElement(_index["default"], {
    type: "ghost"
  }, "ghost")));
});