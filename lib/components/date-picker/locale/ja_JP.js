"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ja_JP_1 = require("rc-picker/lib/locale/ja_JP");
var ja_JP_2 = require("../../time-picker/locale/ja_JP");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: '日付を選択', rangePlaceholder: ['開始日付', '終了日付'] }, ja_JP_1.default),
    timePickerLocale: __assign({}, ja_JP_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=ja_JP.js.map