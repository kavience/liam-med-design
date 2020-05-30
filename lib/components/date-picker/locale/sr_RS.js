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
var sr_RS_1 = require("rc-picker/lib/locale/sr_RS");
var sr_RS_2 = require("../../time-picker/locale/sr_RS");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Izaberite datum', rangePlaceholder: ['Početni datum', 'Krajnji datum'] }, sr_RS_1.default),
    timePickerLocale: __assign({}, sr_RS_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=sr_RS.js.map