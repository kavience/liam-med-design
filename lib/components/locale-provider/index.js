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
exports.ANT_MARK = void 0;
var React = require("react");
var devWarning_1 = require("../_util/devWarning");
var locale_1 = require("../modal/locale");
var context_1 = require("./context");
exports.ANT_MARK = 'internalMark';
var LocaleProvider = /** @class */ (function (_super) {
    __extends(LocaleProvider, _super);
    function LocaleProvider(props) {
        var _this = _super.call(this, props) || this;
        locale_1.changeConfirmLocale(props.locale && props.locale.Modal);
        devWarning_1.default(props._ANT_MARK__ === exports.ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
        return _this;
    }
    LocaleProvider.prototype.componentDidUpdate = function (prevProps) {
        var locale = this.props.locale;
        if (prevProps.locale !== locale) {
            locale_1.changeConfirmLocale(locale && locale.Modal);
        }
    };
    LocaleProvider.prototype.componentWillUnmount = function () {
        locale_1.changeConfirmLocale();
    };
    LocaleProvider.prototype.render = function () {
        var _a = this.props, locale = _a.locale, children = _a.children;
        return (React.createElement(context_1.default.Provider, { value: __assign(__assign({}, locale), { exist: true }) }, children));
    };
    LocaleProvider.defaultProps = {
        locale: {},
    };
    return LocaleProvider;
}(React.Component));
exports.default = LocaleProvider;
//# sourceMappingURL=index.js.map