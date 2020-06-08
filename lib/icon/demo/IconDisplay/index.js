"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThemeType = void 0;

var React = _interopRequireWildcard(require("react"));

var AntdIcons = _interopRequireWildcard(require("@ant-design/icons"));

var _antd = require("antd");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _Category = _interopRequireDefault(require("./Category"));

var _themeIcons = require("./themeIcons");

var _fields = require("./fields");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ThemeType;
exports.ThemeType = ThemeType;

(function (ThemeType) {
  ThemeType["Filled"] = "Filled";
  ThemeType["Outlined"] = "Outlined";
  ThemeType["TwoTone"] = "TwoTone";
})(ThemeType || (exports.ThemeType = ThemeType = {}));

var allIcons = AntdIcons;
var iconTitle = {
  direction: '方向性图标',
  suggestion: '提示建议性图标',
  editor: '编辑类图标',
  data: '数据类图标',
  logo: '品牌和标识',
  other: '网站通用图标'
};

var IconDisplay = /*#__PURE__*/function (_React$Component) {
  _inherits(IconDisplay, _React$Component);

  var _super = _createSuper(IconDisplay);

  function IconDisplay(props) {
    var _this;

    _classCallCheck(this, IconDisplay);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      theme: ThemeType.Outlined,
      searchKey: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeTheme", function (e) {
      _this.setState({
        theme: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchIcon", function (searchKey) {
      _this.setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          searchKey: searchKey
        });
      });
    });

    _this.handleSearchIcon = (0, _debounce["default"])(_this.handleSearchIcon, 300);
    return _this;
  }

  _createClass(IconDisplay, [{
    key: "renderCategories",
    value: function renderCategories() {
      var _this$state = this.state,
          _this$state$searchKey = _this$state.searchKey,
          searchKey = _this$state$searchKey === void 0 ? '' : _this$state$searchKey,
          theme = _this$state.theme;
      return Object.keys(_fields.categories).map(function (key) {
        var iconList = _fields.categories[key];

        if (searchKey) {
          iconList = iconList.filter(function (iconName) {
            return iconName.toLowerCase().includes(searchKey.toLowerCase());
          });
        }

        return {
          category: key,
          icons: iconList.map(function (iconName) {
            return iconName + theme;
          }).filter(function (iconName) {
            return allIcons[iconName];
          })
        };
      }).filter(function (_ref) {
        var icons = _ref.icons;
        return !!icons.length;
      }).map(function (_ref2) {
        var category = _ref2.category,
            icons = _ref2.icons;
        return /*#__PURE__*/React.createElement(_Category["default"], {
          key: category,
          title: iconTitle[category] || '其它',
          theme: theme,
          icons: icons,
          newIcons: IconDisplay.newIconNames
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React.createElement(_antd.Radio.Group, {
        value: this.state.theme,
        onChange: this.handleChangeTheme,
        size: "large",
        buttonStyle: "solid"
      }, /*#__PURE__*/React.createElement(_antd.Radio.Button, {
        value: ThemeType.Outlined
      }, /*#__PURE__*/React.createElement(AntdIcons["default"], {
        component: _themeIcons.OutlinedIcon
      }), " \u7EBF\u6846\u98CE\u683C"), /*#__PURE__*/React.createElement(_antd.Radio.Button, {
        value: ThemeType.Filled
      }, /*#__PURE__*/React.createElement(AntdIcons["default"], {
        component: _themeIcons.FilledIcon
      }), " \u5B9E\u5E95\u98CE\u683C"), /*#__PURE__*/React.createElement(_antd.Radio.Button, {
        value: ThemeType.TwoTone
      }, /*#__PURE__*/React.createElement(AntdIcons["default"], {
        component: _themeIcons.TwoToneIcon
      }), " \u53CC\u8272\u98CE\u683C")), /*#__PURE__*/React.createElement(_antd.Input.Search, {
        placeholder: "\u5728\u6B64\u641C\u7D22\u56FE\u6807\uFF0C\u70B9\u51FB\u56FE\u6807\u53EF\u590D\u5236\u4EE3\u7801",
        style: {
          margin: '0 10px',
          flex: 1
        },
        allowClear: true,
        onChange: function onChange(e) {
          return _this2.handleSearchIcon(e.currentTarget.value);
        },
        size: "large",
        autoFocus: true
      })), this.renderCategories());
    }
  }]);

  return IconDisplay;
}(React.Component);

_defineProperty(IconDisplay, "categories", _fields.categories);

_defineProperty(IconDisplay, "newIconNames", []);

var _default = IconDisplay;
exports["default"] = _default;