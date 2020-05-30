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
var el_GR_1 = require("rc-picker/lib/locale/el_GR");
var el_GR_2 = require("../../time-picker/locale/el_GR");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Επιλέξτε ημερομηνία', rangePlaceholder: ['Αρχική ημερομηνία', 'Τελική ημερομηνία'] }, el_GR_1.default),
    timePickerLocale: __assign({}, el_GR_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/issues/424
exports.default = locale;
//# sourceMappingURL=el_GR.js.map