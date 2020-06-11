"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _step = _interopRequireDefault(require("./create/step1"));

var _step2 = _interopRequireDefault(require("./create/step2"));

var _step3 = _interopRequireDefault(require("./create/step3"));

var _steps = _interopRequireDefault(require("../steps"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(props) {
  var templateList = props.templateList,
      onDeploy = props.onDeploy,
      onSaveTemplate = props.onSaveTemplate,
      onCreateTemplate = props.onCreateTemplate,
      onDeleteTemplate = props.onDeleteTemplate;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = (0, _react.useState)('create'),
      _useState6 = _slicedToArray(_useState5, 2),
      type = _useState6[0],
      setType = _useState6[1];

  var handleChangeStep = function handleChangeStep(target) {
    setCurrent(target);
  };

  var handlePreview = function handlePreview(data) {
    setData(data);
    handleChangeStep(2);
  };

  var handleInitQuestions = function handleInitQuestions(type, questionnaire) {
    setData(questionnaire);
    setType(type);
    handleChangeStep(1);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "questionnaire"
  }, /*#__PURE__*/_react["default"].createElement(_steps["default"], {
    current: current,
    className: "questionnaire-steps"
  }, /*#__PURE__*/_react["default"].createElement(_steps["default"].Step, {
    title: "\u9009\u62E9\u95EE\u5377"
  }), /*#__PURE__*/_react["default"].createElement(_steps["default"].Step, {
    title: "\u7F16\u8F91\u95EE\u5377"
  }), /*#__PURE__*/_react["default"].createElement(_steps["default"].Step, {
    title: "\u9884\u89C8\u95EE\u5377"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "questionnaire-steps-content"
  }, current === 0 && /*#__PURE__*/_react["default"].createElement(_step["default"], {
    initQuestions: handleInitQuestions,
    templateList: templateList,
    onDeleteTemplate: onDeleteTemplate,
    onCreate: onDeleteTemplate,
    onUpdate: onDeleteTemplate
  }), current === 1 && /*#__PURE__*/_react["default"].createElement(_step2["default"], {
    onChangeStep: handleChangeStep,
    onPreview: handlePreview,
    onSaveTemplate: onSaveTemplate,
    onCreateTemplate: onCreateTemplate // onDeploy={onDeploy}
    ,
    type: type,
    data: data
  }), current === 2 && /*#__PURE__*/_react["default"].createElement(_step3["default"], {
    onChangeStep: handleChangeStep,
    onDeploy: onDeploy,
    data: data
  })));
};

exports["default"] = _default;