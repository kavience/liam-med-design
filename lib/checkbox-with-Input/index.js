"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

var _lodash = require("lodash");

var _inputWithLabel = _interopRequireDefault(require("../input-with-label"));

var _multipleInputWithLabel = _interopRequireDefault(require("../multiple-input-with-label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(props) {
  var options = props.options,
      type = props.type,
      onChange = props.onChange;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  (0, _react.useEffect)(function () {
    var value = props.value;
    !(0, _lodash.isEmpty)(value) && setData(value);
  }, [props.value]);

  var handleBoxGroupChange = function handleBoxGroupChange(checkedValues) {
    var tempData = (0, _lodash.cloneDeep)(data);
    var oldCheckedValues = (0, _lodash.get)(tempData, 'checkedValues');
    var newCheckedValues = checkedValues;

    if (type === 'single') {
      newCheckedValues = (0, _lodash.filter)(checkedValues, function (item) {
        return (0, _lodash.indexOf)(oldCheckedValues, item) === -1;
      });
      (0, _lodash.set)(tempData, 'withInputValues', {});
    }

    (0, _lodash.set)(tempData, 'checkedValues', newCheckedValues);
    setData(tempData);
    onChange && onChange(tempData);
  };

  var handleInputChange = function handleInputChange(inputType, option) {
    return function (inputValue) {
      var tempData = (0, _lodash.cloneDeep)(data);

      if (inputType === 'input') {
        (0, _lodash.set)(tempData, "withInputValues.".concat((0, _lodash.get)(option, 'value')), {
          key: (0, _lodash.get)(option, 'value'),
          value: {
            0: inputValue
          }
        });
      }

      if (inputType === 'multiple_input') {
        (0, _lodash.set)(tempData, "withInputValues.".concat((0, _lodash.get)(option, 'value')), {
          key: (0, _lodash.get)(option, 'value'),
          value: inputValue
        });
      }

      if (inputType === 'checkbox') {
        (0, _lodash.set)(tempData, "withInputValues.".concat((0, _lodash.get)(option, 'value')), {
          key: (0, _lodash.get)(option, 'value'),
          value: inputValue
        });
      }

      setData(tempData);
      onChange && onChange(tempData);
    };
  };

  var renderInput = function renderInput(option) {
    var _option$inputSpan = option.inputSpan,
        inputSpan = _option$inputSpan === void 0 ? 6 : _option$inputSpan,
        _option$offset = option.offset,
        offset = _option$offset === void 0 ? 0 : _option$offset,
        _option$inputType = option.inputType,
        inputType = _option$inputType === void 0 ? 'input' : _option$inputType,
        _option$enterType = option.enterType,
        enterType = _option$enterType === void 0 ? 'string' : _option$enterType,
        others = _objectWithoutProperties(option, ["inputSpan", "offset", "inputType", "enterType"]);

    var checkedValues = data.checkedValues,
        withInputValues = data.withInputValues;

    if ((0, _lodash.indexOf)(checkedValues, option.value) > -1) {
      // 简单的接一个 input
      if (inputType === 'input') {
        var inputValue = (0, _lodash.get)(withInputValues, "".concat(option.value, ".value.0"));
        return /*#__PURE__*/_react["default"].createElement(_index.Col, {
          span: inputSpan
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center'
          }
        }, /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            display: 'inline-block',
            marginRight: 4
          }
        }, "( "), /*#__PURE__*/_react["default"].createElement(_inputWithLabel["default"], _extends({}, others, {
          type: enterType,
          style: (0, _lodash.get)(option, 'exceptionStyle.inputStyle'),
          onChange: handleInputChange(inputType, option),
          value: inputValue
        })), /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            display: 'inline-block',
            marginLeft: 4
          }
        }, " )")));
      } // 接多个 checkbox


      if (inputType === 'checkbox') {
        var checkboxOptions = (0, _lodash.get)(option, 'options');
        var boxValues = (0, _lodash.values)((0, _lodash.get)(withInputValues, "".concat((0, _lodash.get)(option, 'value'), ".value")));
        return /*#__PURE__*/_react["default"].createElement(_index.Col, {
          span: inputSpan
        }, /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            display: 'inline-block',
            marginRight: 4
          }
        }, "( "), /*#__PURE__*/_react["default"].createElement(_index.Checkbox.Group, {
          value: boxValues,
          onChange: handleInputChange(inputType, option)
        }, (0, _lodash.map)(checkboxOptions, function (checkboxOption, index) {
          return /*#__PURE__*/_react["default"].createElement(_index.Checkbox, {
            key: index,
            value: (0, _lodash.get)(checkboxOption, 'value')
          }, (0, _lodash.get)(checkboxOption, 'label'));
        })), /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            display: 'inline-block',
            marginLeft: 4
          }
        }, " )"));
      } // 接多个 input


      if (inputType === 'multiple_input') {
        var inputOptions = (0, _lodash.get)(option, 'options');

        var _inputValue = (0, _lodash.get)(withInputValues, "".concat(option.value, ".value"));

        return /*#__PURE__*/_react["default"].createElement(_index.Col, {
          span: inputSpan
        }, /*#__PURE__*/_react["default"].createElement(_multipleInputWithLabel["default"], {
          needWrapper: true,
          options: inputOptions,
          value: _inputValue,
          onChange: handleInputChange(inputType, option)
        }));
      }
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  };

  return /*#__PURE__*/_react["default"].createElement(_index.Checkbox.Group, {
    value: (0, _lodash.get)(data, 'checkedValues'),
    onChange: handleBoxGroupChange,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_index.Row, null, (0, _lodash.map)(options, function (option, index) {
    var _option$span = option.span,
        span = _option$span === void 0 ? 3 : _option$span,
        _option$offset2 = option.offset,
        offset = _option$offset2 === void 0 ? 0 : _option$offset2;

    if (option.withInput) {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
        key: index
      }, /*#__PURE__*/_react["default"].createElement(_index.Col, {
        offset: offset,
        span: span
      }, /*#__PURE__*/_react["default"].createElement(_index.Checkbox, {
        style: (0, _lodash.indexOf)((0, _lodash.get)(data, 'checkedValues'), option.value) > -1 ? (0, _lodash.get)(option, 'exceptionStyle.checkboxStyle') : {},
        value: option.value
      }, option.label)), renderInput(option));
    }

    return /*#__PURE__*/_react["default"].createElement(_index.Col, {
      offset: offset,
      span: span,
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_index.Checkbox, {
      value: option.value
    }, option.label));
  })));
};

exports["default"] = _default;