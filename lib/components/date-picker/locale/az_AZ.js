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
var az_AZ_1 = require("rc-picker/lib/locale/az_AZ");
var az_AZ_2 = require("../../time-picker/locale/az_AZ");
var locale = {
    lang: __assign({ placeholder: 'Tarix seçin', rangePlaceholder: ['Başlama tarixi', 'Bitmə tarixi'] }, az_AZ_1.default),
    timePickerLocale: __assign({}, az_AZ_2.default),
};
exports.default = locale;
//# sourceMappingURL=az_AZ.js.map