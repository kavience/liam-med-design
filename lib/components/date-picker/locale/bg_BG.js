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
var bg_BG_1 = require("rc-picker/lib/locale/bg_BG");
var bg_BG_2 = require("../../time-picker/locale/bg_BG");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Избор на дата', rangePlaceholder: ['Начална', 'Крайна'] }, bg_BG_1.default),
    timePickerLocale: __assign({}, bg_BG_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=bg_BG.js.map