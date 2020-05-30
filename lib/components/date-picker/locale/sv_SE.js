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
var sv_SE_1 = require("rc-picker/lib/locale/sv_SE");
var sv_SE_2 = require("../../time-picker/locale/sv_SE");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Välj datum', rangePlaceholder: ['Startdatum', 'Slutdatum'] }, sv_SE_1.default),
    timePickerLocale: __assign({}, sv_SE_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=sv_SE.js.map