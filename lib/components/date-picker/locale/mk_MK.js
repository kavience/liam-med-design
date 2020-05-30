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
var mk_MK_1 = require("rc-picker/lib/locale/mk_MK");
var mk_MK_2 = require("../../time-picker/locale/mk_MK");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Избери датум', rangePlaceholder: ['Од датум', 'До датум'] }, mk_MK_1.default),
    timePickerLocale: __assign({}, mk_MK_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=mk_MK.js.map