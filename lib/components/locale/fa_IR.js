"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-template-curly-in-string */
var fa_IR_1 = require("rc-pagination/lib/locale/fa_IR");
var fa_IR_2 = require("../date-picker/locale/fa_IR");
var fa_IR_3 = require("../time-picker/locale/fa_IR");
var fa_IR_4 = require("../calendar/locale/fa_IR");
var typeTemplate = '${label} از نوع ${type} معتبر نیست';
var localeValues = {
    locale: 'fa',
    Pagination: fa_IR_1.default,
    DatePicker: fa_IR_2.default,
    TimePicker: fa_IR_3.default,
    Calendar: fa_IR_4.default,
    Table: {
        filterTitle: 'منوی فیلتر',
        filterConfirm: 'تایید',
        filterReset: 'پاک کردن',
        selectAll: 'انتخاب صفحه‌ی کنونی',
        selectInvert: 'معکوس کردن انتخاب‌ها در صفحه ی کنونی',
        selectionAll: 'انتخاب همه داده‌ها',
        sortTitle: 'مرتب سازی',
        expand: 'باز شدن ردیف',
        collapse: 'بستن ردیف',
        triggerDesc: 'ترتیب نزولی',
        triggerAsc: 'ترتیب صعودی',
        cancelSort: 'لغوِ ترتیبِ داده شده',
    },
    Modal: {
        okText: 'تایید',
        cancelText: 'لغو',
        justOkText: 'تایید',
    },
    Popconfirm: {
        okText: 'تایید',
        cancelText: 'لغو',
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'جستجو',
        itemUnit: '',
        itemsUnit: '',
    },
    Upload: {
        uploading: 'در حال آپلود...',
        removeFile: 'حذف فایل',
        uploadError: 'خطا در آپلود',
        previewFile: 'مشاهده‌ی فایل',
        downloadFile: 'دریافت فایل',
    },
    Empty: {
        description: 'داده‌ای موجود نیست',
    },
    Icon: {
        icon: 'آیکن',
    },
    Text: {
        edit: 'ویرایش',
        copy: 'کپس',
        copied: 'کپی شد',
        expand: 'توسعه',
    },
    PageHeader: {
        back: 'برگشت',
    },
    Form: {
        defaultValidateMessages: {
            default: 'خطا در ${label}',
            required: 'فیلد ${label} اجباریست',
            enum: '${label} باید یکی از [${enum}] باشد',
            whitespace: '${label} نمیتواند خالی باشد',
            date: {
                format: 'ساختار تاریخ در ${label} نامعتبر است',
                parse: '${label} قابل تبدیل به تاریخ نیست',
                invalid: '${label} تاریخی نا معتبر است',
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
                len: '${label} باید ${len} کاراکتر باشد',
                min: '${label} باید حداقل ${min} کاراکتر باشد',
                max: '${label} باید حداکثر ${max} کاراکتر باشد',
                range: '${label} باید بین ${min}-${max} کاراکتر باشد',
            },
            number: {
                len: '${label} باید برابر ${len}',
                min: '${label} حداقل میتواند ${min} باشد',
                max: '${label} حداکثر میتواند ${max} باشد',
                range: '${label} باید بین ${min}-${max} باشد',
            },
            array: {
                len: 'تعداد ${label} باید ${len} باشد.',
                min: 'تعداد ${lable} حداقل باید ${min} باشد',
                max: 'تعداد ${lable} حداکثر باید ${max} باشد',
                range: 'مقدار ${label} باید بین ${min}-${max} باشد',
            },
            pattern: {
                mismatch: 'الگوی ${label} با ${pattern} برابری نمی‌کند',
            },
        },
    },
};
exports.default = localeValues;
//# sourceMappingURL=fa_IR.js.map