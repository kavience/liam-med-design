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
var de_DE_1 = require("rc-picker/lib/locale/de_DE");
var de_DE_2 = require("../../time-picker/locale/de_DE");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Datum auswählen', rangePlaceholder: ['Startdatum', 'Enddatum'] }, de_DE_1.default),
    timePickerLocale: __assign({}, de_DE_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/issues/424
exports.default = locale;
//# sourceMappingURL=de_DE.js.map