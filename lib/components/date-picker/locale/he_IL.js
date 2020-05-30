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
var he_IL_1 = require("rc-picker/lib/locale/he_IL");
var he_IL_2 = require("../../time-picker/locale/he_IL");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'בחר תאריך', rangePlaceholder: ['תאריך התחלה', 'תאריך סיום'] }, he_IL_1.default),
    timePickerLocale: __assign({}, he_IL_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=he_IL.js.map