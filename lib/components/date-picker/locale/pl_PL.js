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
var pl_PL_1 = require("rc-picker/lib/locale/pl_PL");
var pl_PL_2 = require("../../time-picker/locale/pl_PL");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Wybierz datę', rangePlaceholder: ['Data początkowa', 'Data końcowa'] }, pl_PL_1.default),
    timePickerLocale: __assign({}, pl_PL_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=pl_PL.js.map