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
var vi_VN_1 = require("rc-picker/lib/locale/vi_VN");
var vi_VN_2 = require("../../time-picker/locale/vi_VN");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Chọn thời điểm', rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc'] }, vi_VN_1.default),
    timePickerLocale: __assign({}, vi_VN_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=vi_VN.js.map