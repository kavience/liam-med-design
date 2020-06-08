"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoToneIcon = exports.OutlinedIcon = exports.FilledIcon = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FilledIcon = function FilledIcon(props) {
  var path = 'M864 64H160C107 64 64 107 64 160v' + '704c0 53 43 96 96 96h704c53 0 96-43 96-96V16' + '0c0-53-43-96-96-96z';
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    viewBox: "0 0 1024 1024"
  }), /*#__PURE__*/React.createElement("path", {
    d: path
  }));
};

exports.FilledIcon = FilledIcon;

var OutlinedIcon = function OutlinedIcon(props) {
  var path = 'M864 64H160C107 64 64 107 64 160v7' + '04c0 53 43 96 96 96h704c53 0 96-43 96-96V160c' + '0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-' + '12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4' + ' 12 12v680c0 6.6-5.4 12-12 12z';
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    viewBox: "0 0 1024 1024"
  }), /*#__PURE__*/React.createElement("path", {
    d: path
  }));
};

exports.OutlinedIcon = OutlinedIcon;

var TwoToneIcon = function TwoToneIcon(props) {
  var path = 'M16 512c0 273.932 222.066 496 496 49' + '6s496-222.068 496-496S785.932 16 512 16 16 238.' + '066 16 512z m496 368V144c203.41 0 368 164.622 3' + '68 368 0 203.41-164.622 368-368 368z';
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    viewBox: "0 0 1024 1024"
  }), /*#__PURE__*/React.createElement("path", {
    d: path
  }));
};

exports.TwoToneIcon = TwoToneIcon;