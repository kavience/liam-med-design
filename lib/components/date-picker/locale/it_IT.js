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
var it_IT_1 = require("rc-picker/lib/locale/it_IT");
var it_IT_2 = require("../../time-picker/locale/it_IT");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Selezionare la data', rangePlaceholder: ["Data d'inizio", 'Data di fine'] }, it_IT_1.default),
    timePickerLocale: __assign({}, it_IT_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/issues/424
exports.default = locale;
//# sourceMappingURL=it_IT.js.map