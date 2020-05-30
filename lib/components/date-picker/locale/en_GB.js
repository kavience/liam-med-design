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
var en_GB_1 = require("rc-picker/lib/locale/en_GB");
var en_GB_2 = require("../../time-picker/locale/en_GB");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Select date', rangePlaceholder: ['Start date', 'End date'] }, en_GB_1.default),
    timePickerLocale: __assign({}, en_GB_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=en_GB.js.map