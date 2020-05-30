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
var ko_KR_1 = require("rc-picker/lib/locale/ko_KR");
var ko_KR_2 = require("../../time-picker/locale/ko_KR");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: '날짜 선택', rangePlaceholder: ['시작일', '종료일'] }, ko_KR_1.default),
    timePickerLocale: __assign({}, ko_KR_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=ko_KR.js.map