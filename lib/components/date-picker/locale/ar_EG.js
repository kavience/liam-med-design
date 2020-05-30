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
var ar_EG_1 = require("rc-picker/lib/locale/ar_EG");
var ar_EG_2 = require("../../time-picker/locale/ar_EG");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'اختيار التاريخ', rangePlaceholder: ['البداية', 'النهاية'] }, ar_EG_1.default),
    timePickerLocale: __assign({}, ar_EG_2.default),
    dateFormat: 'DD-MM-YYYY',
    monthFormat: 'MM-YYYY',
    dateTimeFormat: 'DD-MM-YYYY HH:mm:ss',
    weekFormat: 'wo-YYYY',
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=ar_EG.js.map