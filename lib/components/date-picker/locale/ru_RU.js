"use strict";
/**
 * Created by Andrey Gayvoronsky on 13/04/16.
 */
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
var ru_RU_1 = require("rc-picker/lib/locale/ru_RU");
var ru_RU_2 = require("../../time-picker/locale/ru_RU");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Выберите дату', rangePlaceholder: ['Начальная дата', 'Конечная дата'] }, ru_RU_1.default),
    timePickerLocale: __assign({}, ru_RU_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=ru_RU.js.map