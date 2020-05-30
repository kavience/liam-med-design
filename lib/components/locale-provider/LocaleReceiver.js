"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var React = require("react");
var default_1 = require("./default");
var context_1 = require("./context");
var LocaleReceiver = /** @class */ (function (_super) {
    __extends(LocaleReceiver, _super);
    function LocaleReceiver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocaleReceiver.prototype.getLocale = function () {
        var _a = this.props, componentName = _a.componentName, defaultLocale = _a.defaultLocale;
        var locale = defaultLocale || default_1.default[componentName || 'global'];
        var antLocale = this.context;
        var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
        return __assign(__assign({}, (typeof locale === 'function' ? locale() : locale)), (localeFromContext || {}));
    };
    LocaleReceiver.prototype.getLocaleCode = function () {
        var antLocale = this.context;
        var localeCode = antLocale && antLocale.locale;
        // Had use LocaleProvide but didn't set locale
        if (antLocale && antLocale.exist && !localeCode) {
            return default_1.default.locale;
        }
        return localeCode;
    };
    LocaleReceiver.prototype.render = function () {
        return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    };
    LocaleReceiver.defaultProps = {
        componentName: 'global',
    };
    LocaleReceiver.contextType = context_1.default;
    return LocaleReceiver;
}(React.Component));
exports.default = LocaleReceiver;
//# sourceMappingURL=LocaleReceiver.js.map