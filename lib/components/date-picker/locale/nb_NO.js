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
var nb_NO_1 = require("rc-picker/lib/locale/nb_NO");
var nb_NO_2 = require("../../time-picker/locale/nb_NO");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Velg dato', rangePlaceholder: ['Startdato', 'Sluttdato'] }, nb_NO_1.default),
    timePickerLocale: __assign({}, nb_NO_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=nb_NO.js.map