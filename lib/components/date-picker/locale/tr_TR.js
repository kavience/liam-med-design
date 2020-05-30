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
var tr_TR_1 = require("rc-picker/lib/locale/tr_TR");
var tr_TR_2 = require("../../time-picker/locale/tr_TR");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Tarih Seç', rangePlaceholder: ['Başlangıç Tarihi', 'Bitiş Tarihi'] }, tr_TR_1.default),
    timePickerLocale: __assign({}, tr_TR_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=tr_TR.js.map