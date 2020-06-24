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

require("./item.less");

var _step = require("./step2");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var lastClientY = 0;

var _default = function _default(props) {
  var index = props.index,
      question = props.question,
      lastQuestion = props.lastQuestion,
      onChangeIndex = props.onChangeIndex,
      onQuestionClick = props.onQuestionClick,
      onQuestionItemOptionsDelete = props.onQuestionItemOptionsDelete,
      onQuestionItemDelete = props.onQuestionItemDelete,
      onQuestionItemOptionsAdd = props.onQuestionItemOptionsAdd,
      onQuestionItemEdit = props.onQuestionItemEdit,
      onQuestionItemOptionEdit = props.onQuestionItemOptionEdit;
  var ref = (0, _react.useRef)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      hoverTargetQuestionPlace = _useState2[0],
      setHoverTargetQuestionPlace = _useState2[1];

  (0, _react.useEffect)(function () {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }, [lastQuestion]);

  var handleQuestionDragOver = function handleQuestionDragOver(e) {
    var _ref$current$getBound = ref.current.getBoundingClientRect(),
        y = _ref$current$getBound.y,
        height = _ref$current$getBound.height;

    var normalClientY = y + height / 2;
    var clientY = (0, _lodash.get)(e, 'clientY');

    if (clientY) {
      var _hoverTargetQuestionPlace = 'bottom';
      var newQuestionIndex = index;

      if (clientY < normalClientY) {
        _hoverTargetQuestionPlace = 'top';
        newQuestionIndex = index - 1;
      }

      lastClientY = y + height;
      setHoverTargetQuestionPlace(_hoverTargetQuestionPlace);
      onChangeIndex(newQuestionIndex);
    }
  };

  var handleQuestionDragLeave = function handleQuestionDragLeave() {
    setHoverTargetQuestionPlace('');
  };

  var renderQuestionInput = function renderQuestionInput() {
    var type = question.type,
        options = question.options;

    if ((0, _lodash.indexOf)(['radio'], type) > -1) {
      return (0, _lodash.map)(options, function (option, optionIndex) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: optionIndex,
          className: "question-step-two__panel-preview-middle__question-options"
        }, /*#__PURE__*/_react["default"].createElement(_antd.Input, {
          className: "question-step-two__panel-preview-middle__question-options-input",
          addonBefore: /*#__PURE__*/_react["default"].createElement(_icons.CheckCircleOutlined, null),
          value: (0, _lodash.get)(option, 'label'),
          onChange: function onChange(e) {
            onQuestionItemOptionEdit(index, optionIndex, (0, _lodash.get)(e, 'target.value'));
          },
          size: "small"
        }), /*#__PURE__*/_react["default"].createElement(_icons.CloseCircleOutlined, {
          onClick: function onClick(e) {
            e.stopPropagation();
            onQuestionItemOptionsDelete(index, optionIndex);
          },
          className: "question-step-two__panel-preview-middle__question-options-delete"
        }));
      });
    }

    if ((0, _lodash.indexOf)(['multiple'], type) > -1) {
      return (0, _lodash.map)(options, function (option, optionIndex) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: optionIndex,
          className: "question-step-two__panel-preview-middle__question-options"
        }, /*#__PURE__*/_react["default"].createElement(_antd.Input, {
          className: "question-step-two__panel-preview-middle__question-options-input",
          addonBefore: /*#__PURE__*/_react["default"].createElement(_icons.BorderOutlined, null),
          value: (0, _lodash.get)(option, 'label'),
          size: "small",
          onChange: function onChange(e) {
            onQuestionItemOptionEdit(index, optionIndex, (0, _lodash.get)(e, 'target.value'));
          }
        }), /*#__PURE__*/_react["default"].createElement(_icons.CloseCircleOutlined, {
          onClick: function onClick(e) {
            e.stopPropagation();
            onQuestionItemOptionsDelete(index, optionIndex);
          },
          className: "question-step-two__panel-preview-middle__question-options-delete"
        }));
      });
    }

    if ((0, _lodash.indexOf)(['dropdown'], type) > -1) {
      return (0, _lodash.map)(options, function (option, optionIndex) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: optionIndex,
          className: "question-step-two__panel-preview-middle__question-options"
        }, /*#__PURE__*/_react["default"].createElement(_antd.Input, {
          className: "question-step-two__panel-preview-middle__question-options-input",
          addonBefore: /*#__PURE__*/_react["default"].createElement(_icons.CaretDownOutlined, null),
          value: (0, _lodash.get)(option, 'label'),
          size: "small",
          onChange: function onChange(e) {
            onQuestionItemOptionEdit(index, optionIndex, (0, _lodash.get)(e, 'target.value'));
          }
        }), /*#__PURE__*/_react["default"].createElement(_icons.CloseCircleOutlined, {
          onClick: function onClick(e) {
            e.stopPropagation();
            onQuestionItemOptionsDelete(index, optionIndex);
          },
          className: "question-step-two__panel-preview-middle__question-options-delete"
        }));
      });
    }

    if ((0, _lodash.indexOf)(['completion'], type) > -1) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-preview-middle__question-options"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Input, {
        className: "question-step-two__panel-preview-middle__question-options-input",
        size: "small"
      }));
    }

    if ((0, _lodash.indexOf)(['descption'], type) > -1) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-preview-middle__question-options"
      });
    }

    if ((0, _lodash.indexOf)(['star'], type) > -1) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-preview-middle__question-options"
      }, /*#__PURE__*/_react["default"].createElement(_icons.StarOutlined, null), /*#__PURE__*/_react["default"].createElement(_icons.StarOutlined, null), /*#__PURE__*/_react["default"].createElement(_icons.StarOutlined, null), /*#__PURE__*/_react["default"].createElement(_icons.StarOutlined, null), /*#__PURE__*/_react["default"].createElement(_icons.StarOutlined, null));
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  };

  var renderBottomBtns = function renderBottomBtns(question) {
    if ((0, _lodash.indexOf)(['radio', 'multiple', 'dropdown'], (0, _lodash.get)(question, 'type')) > -1) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginTop: 20
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        size: "small",
        onClick: function onClick(e) {
          onQuestionItemOptionsAdd(index);
        }
      }, "\u6DFB\u52A0\u9009\u9879"));
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: !(0, _lodash.isEmpty)(hoverTargetQuestionPlace) ? _defineProperty({}, "border-".concat(hoverTargetQuestionPlace), '4px solid #ff0000') : {},
    ref: ref,
    className: "question-step-two__panel-preview-middle__question",
    onDragOver: handleQuestionDragOver,
    onDragLeave: handleQuestionDragLeave,
    onClick: function onClick() {
      onQuestionClick(_objectSpread(_objectSpread({}, question), {}, {
        index: index
      }));
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "question-step-two__panel-preview-middle__question-title"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, index, ".", (0, _lodash.get)(_step.labelsArrayMapping, "".concat((0, _lodash.get)(question, 'type'), ".title"))), /*#__PURE__*/_react["default"].createElement(_icons.DeleteOutlined, {
    onClick: function onClick(e) {
      e.stopPropagation();
      onQuestionItemDelete(index);
    },
    className: "question-step-two__panel-preview-middle__question-title-icon-delete"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '90%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_antd.Input, {
    className: "question-step-two__panel-preview-middle__question-options-input",
    value: (0, _lodash.get)(question, 'title'),
    size: "small",
    onChange: function onChange(e) {
      onQuestionItemEdit(index, (0, _lodash.get)(e, 'target.value'));
    }
  }), renderQuestionInput()), !(0, _lodash.isNil)((0, _lodash.get)(question, 'logic')) && !(0, _lodash.isEmpty)((0, _lodash.get)(question, 'logic')) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "question-step-two__panel-preview-middle__question-tip"
  }, "\u4F9D\u8D56\u4E8E\u7B2C", (0, _lodash.get)(question, 'logic.bind') + 1, "\u9898\u7684\u7B2C", (0, _lodash.join)((0, _lodash.map)((0, _lodash.get)(question, 'logic.selectOption'), function (value) {
    return value + 1;
  }), '、'), "\u9009\u9879"), renderBottomBtns(question));
};

exports["default"] = _default;