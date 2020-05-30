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
var th_TH_1 = require("rc-picker/lib/locale/th_TH");
var th_TH_2 = require("../../time-picker/locale/th_TH");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'เลือกวันที่', rangePlaceholder: ['วันเริ่มต้น', 'วันสิ้นสุด'] }, th_TH_1.default),
    timePickerLocale: __assign({}, th_TH_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=th_TH.js.map