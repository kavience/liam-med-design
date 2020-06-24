"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Step1 = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _lodash = require("lodash");

require("./step1.less");

var _icon = require("../../icon");

var _questionnaireItemTop = _interopRequireDefault(require("../assets/questionnaire-item-top.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var itemBgColors = ['#FFEFDD', '#FBDDDD', '#DDF3FB', '#DDFBE4', '#E8DDFB'];

var Step1 = /*#__PURE__*/function (_Component) {
  _inherits(Step1, _Component);

  var _super = _createSuper(Step1);

  function Step1(props) {
    var _this;

    _classCallCheck(this, Step1);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (type, item) {
      var initQuestions = _this.props.initQuestions;
      initQuestions && initQuestions(type, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleNewTemplate", function () {
      var initQuestions = _this.props.initQuestions;
      initQuestions && initQuestions('create', {});
    });

    return _this;
  }

  _createClass(Step1, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          templateList = _this$props.templateList,
          onDeleteTemplate = _this$props.onDeleteTemplate;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "follow-up-step1"
      }, /*#__PURE__*/_react["default"].createElement(_antd.List, {
        rowKey: "id",
        grid: {
          gutter: 24,
          column: 4
        },
        dataSource: [''].concat(_toConsumableArray(templateList)),
        renderItem: function renderItem(item) {
          return item ? /*#__PURE__*/_react["default"].createElement(_antd.List.Item, {
            key: item.id
          }, /*#__PURE__*/_react["default"].createElement(_antd.Card, {
            hoverable: true,
            bodyStyle: {
              paddingBottom: 20
            },
            onClick: function onClick() {
              _this2.handleSelect('update', item);
            },
            cover: /*#__PURE__*/_react["default"].createElement("div", {
              className: "item-top",
              style: {
                backgroundColor: (0, _lodash.get)(itemBgColors, (0, _lodash.round)(Math.random() * 5)) || '#FFEFDD'
              }
            }, /*#__PURE__*/_react["default"].createElement("img", {
              className: "item-top-img",
              src: _questionnaireItemTop["default"],
              alt: ""
            })),
            actions: [/*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_icons.EditOutlined, {
              key: "edit"
            }), "\u7F16\u8F91"), /*#__PURE__*/_react["default"].createElement("div", {
              onClick: function onClick(e) {
                e.stopPropagation();

                _this2.handleSelect('create', item);
              }
            }, /*#__PURE__*/_react["default"].createElement(_icons.CopyOutlined, {
              key: "copy"
            }), "\u590D\u5236"), /*#__PURE__*/_react["default"].createElement("div", {
              onClick: function onClick(e) {
                e.stopPropagation();
                onDeleteTemplate && onDeleteTemplate(item);
              }
            }, /*#__PURE__*/_react["default"].createElement(_icons.DeleteOutlined, {
              key: "delete"
            }), "\u5220\u9664")]
          }, /*#__PURE__*/_react["default"].createElement(_antd.Card.Meta, {
            style: {
              cursor: 'pointer'
            },
            title: item.title,
            description: item.description
          }))) : /*#__PURE__*/_react["default"].createElement(_antd.List.Item, null, /*#__PURE__*/_react["default"].createElement("div", {
            className: "follow-up-new-item",
            onClick: _this2.handleNewTemplate
          }, /*#__PURE__*/_react["default"].createElement(_icon.CustomIcon, {
            type: "icon-and"
          }), /*#__PURE__*/_react["default"].createElement("span", null, "\u65B0\u5EFA\u8C03\u67E5\u95EE\u5377")));
        }
      }));
    }
  }]);

  return Step1;
}(_react.Component);

exports.Step1 = Step1;
var _default = Step1;
exports["default"] = _default;