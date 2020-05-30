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
var et_EE_1 = require("rc-picker/lib/locale/et_EE");
var et_EE_2 = require("../../time-picker/locale/et_EE");
// 统一合并为完整的 Locale
var locale = {
    lang: __assign({ placeholder: 'Vali kuupäev', rangePlaceholder: ['Algus kuupäev', 'Lõpu kuupäev'] }, et_EE_1.default),
    timePickerLocale: __assign({}, et_EE_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=et_EE.js.map