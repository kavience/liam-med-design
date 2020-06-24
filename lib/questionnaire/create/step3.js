"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _lodash = require("lodash");

var _icons = require("@ant-design/icons");

var _icon = require("../../icon");

require("./step3.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(props) {
  var _useState = (0, _react.useState)('mobile'),
      _useState2 = _slicedToArray(_useState, 2),
      device = _useState2[0],
      setDevice = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      globalLogic = _useState4[0],
      setGlobalLogic = _useState4[1];

  var data = props.data,
      onChangeStep = props.onChangeStep,
      onSubmit = props.onSubmit;
  var questions = data.questions,
      questionsTitle = data.questionsTitle,
      questionsDescription = data.questionsDescription;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      refresh = _useState6[0],
      setRefresh = _useState6[1];

  (0, _react.useEffect)(function () {
    refresh && setTimeout(function () {
      return setRefresh(false);
    });
  }, [refresh]);
  (0, _react.useEffect)(function () {
    var newGlobalLogic = _toConsumableArray(globalLogic);

    (0, _lodash.map)(questions, function (question, index) {
      var logic = question.logic;

      if (logic) {
        newGlobalLogic.push({
          bindIndex: (0, _lodash.get)(logic, 'bind'),
          index: index
        });
      }
    });
    setGlobalLogic(newGlobalLogic);
  }, []);

  var handleChange = function handleChange(e) {
    setDevice((0, _lodash.get)(e, 'target.value'));
  };

  var handleMockSubmit = function handleMockSubmit() {
    _antd.notification.error({
      message: '不可提交',
      description: '此为预览模式，无法提交'
    });
  };

  var handleValuesChange = function handleValuesChange(values, allValues) {
    var changedKey = (0, _lodash.get)((0, _lodash.keys)(values), 0);
    (0, _lodash.map)(globalLogic, function (_ref) {
      var bindIndex = _ref.bindIndex,
          index = _ref.index;

      if (changedKey == bindIndex) {
        form.setFieldsValue(_defineProperty({}, index, undefined));
      }
    });
    setRefresh(true);
  };

  var renderFormItem = function renderFormItem(question, index) {
    var options = question.options,
        type = question.type,
        title = question.title,
        logic = question.logic;
    var itemStyle = {};

    var Component = /*#__PURE__*/_react["default"].createElement(_react.Fragment, null);

    var bindIndex = (0, _lodash.get)(logic, 'bind');
    var bindIndexSelectOption = (0, _lodash.get)(logic, 'selectOption');
    var formItemValue = form.getFieldValue(bindIndex);

    if (logic) {
      itemStyle = {
        display: 'none'
      };

      if ((0, _lodash.isArray)(formItemValue)) {
        (0, _lodash.map)(formItemValue, function (itemOption) {
          if ((0, _lodash.indexOf)(bindIndexSelectOption, itemOption) > -1) {
            itemStyle = {};
          }
        });
      } else {
        if ((0, _lodash.indexOf)(bindIndexSelectOption, formItemValue) > -1) {
          itemStyle = {};
        }
      }
    }

    switch (type) {
      case 'radio':
        Component = /*#__PURE__*/_react["default"].createElement(_antd.Radio.Group, null, (0, _lodash.map)(options, function (option, key) {
          return /*#__PURE__*/_react["default"].createElement(_antd.Radio, {
            style: {
              display: 'block'
            },
            key: key,
            value: key
          }, (0, _lodash.get)(option, 'label'));
        }));
        break;

      case 'multiple':
        Component = /*#__PURE__*/_react["default"].createElement(_antd.Checkbox.Group, null, (0, _lodash.map)(options, function (option, key) {
          return /*#__PURE__*/_react["default"].createElement(_antd.Checkbox, {
            style: {
              display: 'block',
              margin: 0
            },
            key: key,
            value: key
          }, (0, _lodash.get)(option, 'label'));
        }));
        break;

      case 'dropdown':
        Component = /*#__PURE__*/_react["default"].createElement(_antd.Select, null, (0, _lodash.map)(options, function (option, key) {
          return /*#__PURE__*/_react["default"].createElement(_antd.Select.Option, {
            key: key,
            value: key
          }, (0, _lodash.get)(option, 'label'));
        }));
        break;

      case 'star':
        Component = /*#__PURE__*/_react["default"].createElement(_antd.Rate, null);
        break;

      case 'descption':
        break;

      default:
        Component = /*#__PURE__*/_react["default"].createElement(_antd.Input, null);
        break;
    }

    return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, {
      style: itemStyle,
      name: index,
      label: "".concat(index + 1, ".").concat(title)
    }, Component);
  };

  var renderMobileShow = function renderMobileShow() {
    return /*#__PURE__*/_react["default"].createElement(_antd.Form, {
      form: form,
      layout: "vertical",
      onValuesChange: handleValuesChange
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "questions-title"
    }, questionsTitle), /*#__PURE__*/_react["default"].createElement("div", {
      className: "questions-desc"
    }, questionsDescription), (0, _lodash.map)(questions, function (question, index) {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
        key: index
      }, renderFormItem(question, index));
    }), /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, null, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      type: "primary",
      onClick: handleMockSubmit
    }, "\u63D0\u4EA4")));
  };

  var renderComputeShow = function renderComputeShow() {
    return /*#__PURE__*/_react["default"].createElement(_antd.Form, {
      form: form,
      layout: "vertical",
      onValuesChange: handleValuesChange
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "questions-title"
    }, questionsTitle), /*#__PURE__*/_react["default"].createElement("div", {
      className: "questions-desc"
    }, questionsDescription), (0, _lodash.map)(questions, function (question, index) {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
        key: index
      }, renderFormItem(question, index));
    }), /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, null, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      type: "primary",
      onClick: handleMockSubmit
    }, "\u63D0\u4EA4")));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "question-step-three__panel"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "question-step-three__panel-radio"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Radio.Group, {
    onChange: handleChange,
    value: device
  }, /*#__PURE__*/_react["default"].createElement(_antd.Radio.Button, {
    value: "mobile"
  }, /*#__PURE__*/_react["default"].createElement(_icons.MobileOutlined, {
    style: {
      marginRight: 5
    }
  }), "\u624B\u673A"), /*#__PURE__*/_react["default"].createElement(_antd.Radio.Button, {
    value: "compute"
  }, /*#__PURE__*/_react["default"].createElement(_icons.DesktopOutlined, {
    style: {
      marginRight: 5
    }
  }), "\u7535\u8111"))), device === 'mobile' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "question-step-three__panel-mobile"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "question-step-three__panel-mobile-preview"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "question-step-three__panel-mobile-preview_content"
  }, renderMobileShow()))), device === 'compute' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "question-step-three__panel-compute"
  }, renderComputeShow()), /*#__PURE__*/_react["default"].createElement("div", {
    className: "question-step-three__panel-bottom"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    style: {
      marginRight: 8
    },
    icon: /*#__PURE__*/_react["default"].createElement(_icon.CustomIcon, {
      type: "icon-reset"
    }),
    onClick: function onClick() {
      onChangeStep && onChangeStep(1);
    }
  }, "\u4E0A\u4E00\u6B65"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "primary",
    icon: /*#__PURE__*/_react["default"].createElement(_icon.CustomIcon, {
      type: "icon-task"
    }),
    style: {
      marginRight: 8
    },
    onClick: function onClick() {
      onSubmit && onSubmit();
    }
  }, "\u63D0\u4EA4")));
};

exports["default"] = _default;