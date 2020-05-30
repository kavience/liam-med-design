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
var fr_FR_1 = require("rc-picker/lib/locale/fr_FR");
var fr_FR_2 = require("../../time-picker/locale/fr_FR");
// Merge into a locale object
var locale = {
    lang: __assign({ placeholder: 'Sélectionner une date', yearPlaceholder: 'Sélectionner une année', quarterPlaceholder: 'Sélectionner un trimestre', monthPlaceholder: 'Sélectionner un mois', weekPlaceholder: 'Sélectionner une semaine', rangePlaceholder: ['Date de début', 'Date de fin'], rangeYearPlaceholder: ['Année de début', 'Année de fin'], rangeMonthPlaceholder: ['Mois de début', 'Mois de fin'], rangeWeekPlaceholder: ['Semaine de début', 'Semaine de fin'] }, fr_FR_1.default),
    timePickerLocale: __assign({}, fr_FR_2.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/issues/424
exports.default = locale;
//# sourceMappingURL=fr_FR.js.map