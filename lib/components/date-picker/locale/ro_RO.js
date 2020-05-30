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
var ro_RO_1 = require("rc-picker/lib/locale/ro_RO");
var ro_RO_2 = require("../../time-picker/locale/ro_RO");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Selectează data', rangePlaceholder: ['Data start', 'Data sfârșit'] }, ro_RO_1.default),
    timePickerLocale: __assign({}, ro_RO_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=ro_RO.js.map