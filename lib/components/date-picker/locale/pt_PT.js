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
var pt_PT_1 = require("rc-picker/lib/locale/pt_PT");
var pt_PT_2 = require("../../time-picker/locale/pt_PT");
// Merge into a locale object
var locale = {
    lang: __assign(__assign({}, pt_PT_1.default), { placeholder: 'Data', rangePlaceholder: ['Data inicial', 'Data final'], today: 'Hoje', now: 'Agora', backToToday: 'Hoje', ok: 'Ok', clear: 'Limpar', month: 'Mês', year: 'Ano', timeSelect: 'Hora', dateSelect: 'Selecionar data', monthSelect: 'Selecionar mês', yearSelect: 'Selecionar ano', decadeSelect: 'Selecionar década', yearFormat: 'YYYY', dateFormat: 'D/M/YYYY', dayFormat: 'D', dateTimeFormat: 'D/M/YYYY HH:mm:ss', monthFormat: 'MMMM', monthBeforeYear: false, previousMonth: 'Mês anterior (PageUp)', nextMonth: 'Mês seguinte (PageDown)', previousYear: 'Ano anterior (Control + left)', nextYear: 'Ano seguinte (Control + right)', previousDecade: 'Última década', nextDecade: 'Próxima década', previousCentury: 'Último século', nextCentury: 'Próximo século' }),
    timePickerLocale: __assign(__assign({}, pt_PT_2.default), { placeholder: 'Hora' }),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=pt_PT.js.map