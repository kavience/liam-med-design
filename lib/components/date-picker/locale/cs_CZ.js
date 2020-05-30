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
var cs_CZ_1 = require("rc-picker/lib/locale/cs_CZ");
var cs_CZ_2 = require("../../time-picker/locale/cs_CZ");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Vybrat datum', rangePlaceholder: ['Od', 'Do'] }, cs_CZ_1.default),
    timePickerLocale: __assign({}, cs_CZ_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=cs_CZ.js.map