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
var en_US_1 = require("rc-picker/lib/locale/en_US");
var en_US_2 = require("../../time-picker/locale/en_US");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Select date', yearPlaceholder: 'Select year', quarterPlaceholder: 'Select quarter', monthPlaceholder: 'Select month', weekPlaceholder: 'Select week', rangePlaceholder: ['Start date', 'End date'], rangeYearPlaceholder: ['Start year', 'End year'], rangeMonthPlaceholder: ['Start month', 'End month'], rangeWeekPlaceholder: ['Start week', 'End week'] }, en_US_1.default),
    timePickerLocale: __assign({}, en_US_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=en_US.js.map