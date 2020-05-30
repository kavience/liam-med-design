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
var zh_TW_1 = require("rc-picker/lib/locale/zh_TW");
var zh_TW_2 = require("../../time-picker/locale/zh_TW");
// 统一合并为完整的 Locale
var locale = {
    lang: __assign({ placeholder: '請選擇日期', rangePlaceholder: ['開始日期', '結束日期'] }, zh_TW_1.default),
    timePickerLocale: __assign({}, zh_TW_2.default),
};
locale.lang.ok = '確 定';
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=zh_TW.js.map