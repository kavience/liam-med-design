"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CustomIcon: true
};
exports.CustomIcon = void 0;

var _icons = require("@ant-design/icons");

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icons[key];
    }
  });
});
var CustomIcon = (0, _icons.createFromIconfontCN)({
  scriptUrl: '//at.alicdn.com/t/font_1661400_ya9mb9dr31a.js'
});
exports.CustomIcon = CustomIcon;