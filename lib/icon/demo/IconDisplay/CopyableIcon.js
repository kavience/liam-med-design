"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

var AntdIcons = _interopRequireWildcard(require("@ant-design/icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var allIcons = AntdIcons;

var CopyableIcon = function CopyableIcon(_ref) {
  var name = _ref.name,
      isNew = _ref.isNew,
      justCopied = _ref.justCopied,
      onCopied = _ref.onCopied,
      theme = _ref.theme;
  var className = (0, _classnames["default"])(_defineProperty({
    copied: justCopied === name
  }, theme, !!theme));
  return /*#__PURE__*/React.createElement(_reactCopyToClipboard["default"], {
    text: "<".concat(name, " />"),
    onCopy: function onCopy(text) {
      return onCopied(name, text);
    }
  }, /*#__PURE__*/React.createElement("li", {
    className: className
  }, /*#__PURE__*/React.createElement(allIcons[name]), /*#__PURE__*/React.createElement("span", {
    className: "anticon-class"
  }, /*#__PURE__*/React.createElement(_antd.Badge, {
    dot: isNew
  }, name))));
};

var _default = CopyableIcon;
exports["default"] = _default;