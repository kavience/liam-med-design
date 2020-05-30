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
var zh_CN_1 = require("rc-picker/lib/locale/zh_CN");
var zh_CN_2 = require("../../time-picker/locale/zh_CN");
// 统一合并为完整的 Locale
var locale = {
    lang: __assign({ placeholder: '请选择日期', yearPlaceholder: '请选择年份', quarterPlaceholder: '请选择季度', monthPlaceholder: '请选择月份', weekPlaceholder: '请选择周', rangePlaceholder: ['开始日期', '结束日期'], rangeYearPlaceholder: ['开始年份', '结束年份'], rangeMonthPlaceholder: ['开始月份', '结束月份'], rangeWeekPlaceholder: ['开始周', '结束周'] }, zh_CN_1.default),
    timePickerLocale: __assign({}, zh_CN_2.default),
};
// should add whitespace between char in Button
locale.lang.ok = '确 定';
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=zh_CN.js.map