"use strict";
/* eslint-disable no-template-curly-in-string */
Object.defineProperty(exports, "__esModule", { value: true });
var ru_RU_1 = require("rc-pagination/lib/locale/ru_RU");
var ru_RU_2 = require("../date-picker/locale/ru_RU");
var ru_RU_3 = require("../time-picker/locale/ru_RU");
var ru_RU_4 = require("../calendar/locale/ru_RU");
var typeTemplate = '${label} не является типом ${type}';
var localeValues = {
    locale: 'ru',
    Pagination: ru_RU_1.default,
    DatePicker: ru_RU_2.default,
    TimePicker: ru_RU_3.default,
    Calendar: ru_RU_4.default,
    global: {
        placeholder: 'Пожалуйста выберите',
    },
    Table: {
        filterTitle: 'Фильтр',
        filterConfirm: 'OK',
        filterReset: 'Сбросить',
        emptyText: 'Нет данных',
        selectAll: 'Выбрать всё',
        selectInvert: 'Инвертировать выбор',
        selectionAll: 'Выбрать все данные',
        sortTitle: 'Сортировка',
        expand: 'Развернуть строку',
        collapse: 'Свернуть строку',
        triggerDesc: 'Нажмите для сортировки по убыванию',
        triggerAsc: 'Нажмите для сортировки по возрастанию',
        cancelSort: 'Нажмите, чтобы отменить сортировку',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Отмена',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Отмена',
    },
    Transfer: {
        searchPlaceholder: 'Поиск',
        itemUnit: 'элем.',
        itemsUnit: 'элем.',
    },
    Upload: {
        uploading: 'Загрузка...',
        removeFile: 'Удалить файл',
        uploadError: 'При загрузке произошла ошибка',
        previewFile: 'Предпросмотр файла',
        downloadFile: 'Загрузить файл',
    },
    Empty: {
        description: 'Нет данных',
    },
    Icon: {
        icon: 'иконка',
    },
    Text: {
        edit: 'редактировать',
        copy: 'копировать',
        copied: 'скопировано',
        expand: 'раскрыть',
    },
    PageHeader: {
        back: 'назад',
    },
    Form: {
        defaultValidateMessages: {
            default: 'Ошибка проверки поля ${label}',
            required: 'Пожалуйста, введите ${label}',
            enum: '${label} должен быть одним из [${enum}]',
            whitespace: '${label} не может быть пустым',
            date: {
                format: '${label} не правильный формат даты',
                parse: '${label} не может быть преобразовано в дату',
                invalid: '${label} не является корректной датой',
            },
            types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                boolean: typeTemplate,
                integer: typeTemplate,
                float: typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate,
            },
            string: {
                len: '${label} должна быть ${len} символов',
                min: '${label} должна быть больше или равна ${min} символов',
                max: '${label} должна быть меньше или равна ${max} символов',
                range: 'Длина ${label} должна быть между ${min}-${max} символами',
            },
            number: {
                len: '${label} должна быть равна ${len}',
                min: '${label} должна быть больше или равна ${min}',
                max: '${label} должна быть меньше или равна ${max}',
            },
            array: {
                len: 'Количество элементов ${label} должно быть равно ${len}',
                min: 'Количество элементов ${label} должно быть больше или равно ${min}',
                max: 'Количество элементов ${label} должно быть меньше или равно ${max}',
                range: 'Количество элементов ${label} должно быть между ${min} и ${max}',
            },
            pattern: {
                mismatch: '${label} не соответствует шаблону ${pattern}',
            },
        },
    },
};
exports.default = localeValues;
//# sourceMappingURL=ru_RU.js.map