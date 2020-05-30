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
var sl_SI_1 = require("../../time-picker/locale/sl_SI");
// Merge into a locale object
var locale = {
    lang: {
        locale: 'sl',
        placeholder: 'Izberite datum',
        rangePlaceholder: ['Začetni datum', 'Končni datum'],
        today: 'Danes',
        now: 'Trenutno',
        backToToday: 'Nazaj na trenutni datum',
        ok: 'Ok',
        clear: 'Počisti',
        month: 'Mesec',
        year: 'Leto',
        timeSelect: 'Izberi čas',
        dateSelect: 'Izberi datum',
        monthSelect: 'Izberite mesec',
        yearSelect: 'Izberite leto',
        decadeSelect: 'Izberite desetletje',
        yearFormat: 'YYYY',
        dateFormat: 'D.M.YYYY',
        dayFormat: 'D',
        dateTimeFormat: 'D.M.YYYY HH:mm:ss',
        monthFormat: 'MMMM',
        monthBeforeYear: true,
        previousMonth: 'Prejšnji mesec (PageUp)',
        nextMonth: 'Naslednji mesec (PageDown)',
        previousYear: 'Lansko leto (Control + left)',
        nextYear: 'Naslednje leto (Control + right)',
        previousDecade: 'Prejšnje desetletje',
        nextDecade: 'Naslednje desetletje',
        previousCentury: 'Zadnje stoletje',
        nextCentury: 'Naslednje stoletje',
    },
    timePickerLocale: __assign({}, sl_SI_1.default),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=sl_SI.js.map