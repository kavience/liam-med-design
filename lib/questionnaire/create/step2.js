"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.labelsArrayMapping = exports.labelsArray = exports.descArray = exports.starArray = exports.chooseArray = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _lodash = require("lodash");

var _questionItem = _interopRequireDefault(require("./question-item"));

require("./step2.less");

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

var chooseArray = [{
  title: '单选题',
  value: 'radio'
}, {
  title: '多选题',
  value: 'multiple'
}, {
  title: '下拉题',
  value: 'dropdown'
}, {
  title: '填空题',
  value: 'completion'
}];
exports.chooseArray = chooseArray;
var starArray = [{
  title: '打分题',
  value: 'star'
}];
exports.starArray = starArray;
var descArray = [{
  title: '段落说明',
  value: 'descption'
}];
exports.descArray = descArray;
var labelsArray = (0, _lodash.concat)(chooseArray, starArray, descArray);
exports.labelsArray = labelsArray;
var labelsArrayMapping = (0, _lodash.keyBy)(labelsArray, 'value');
exports.labelsArrayMapping = labelsArrayMapping;
var btns = [{
  id: 1,
  title: '选择填空',
  value: chooseArray
}, {
  id: 2,
  title: '评分题',
  value: starArray
}, {
  id: 3,
  title: '文字说明',
  value: descArray
}];

var Step2 = /*#__PURE__*/function (_React$Component) {
  _inherits(Step2, _React$Component);

  var _super = _createSuper(Step2);

  function Step2(props) {
    var _this;

    _classCallCheck(this, Step2);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "questionItemRefs", {});

    _defineProperty(_assertThisInitialized(_this), "lastClientY", 0);

    _defineProperty(_assertThisInitialized(_this), "index", 0);

    _defineProperty(_assertThisInitialized(_this), "generateQuestionByType", function (type) {
      var question = undefined;

      switch (type) {
        case 'radio':
          question = {
            type: type,
            value: type,
            label: '单选题',
            title: '请输入题目标题',
            options: [{
              label: '选项一',
              value: 0
            }, {
              label: '选项二',
              value: 1
            }]
          };
          break;

        case 'multiple':
          question = {
            type: type,
            value: type,
            label: '多选题',
            title: '请输入题目标题',
            options: [{
              label: '选项一',
              value: 0
            }, {
              label: '选项二',
              value: 1
            }]
          };
          break;

        case 'dropdown':
          question = {
            type: type,
            label: '下拉题',
            value: type,
            title: '请输入题目标题',
            options: [{
              label: '选项一',
              value: 0
            }, {
              label: '选项二',
              value: 1
            }]
          };
          break;

        case 'completion':
          question = {
            value: type,
            type: type,
            label: '填空题',
            title: '请输入题目标题'
          };
          break;

        case 'star':
          question = {
            value: type,
            type: type,
            label: '打分题',
            title: '请输入题目标题'
          };
          break;

        case 'descption':
          question = {
            value: type,
            type: type,
            label: '段落说明',
            title: '请输入题目标题'
          };
          break;
      }

      return question;
    });

    _defineProperty(_assertThisInitialized(_this), "handleBtnClick", function (type) {
      return function () {
        var questions = _this.state.questions;
        var lastItemRef = (0, _lodash.get)(_this.questionItemRefs, (0, _lodash.last)((0, _lodash.keys)(_this.questionItemRefs)));
        lastItemRef && lastItemRef.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });

        var question = _this.generateQuestionByType(type);

        _this.setState({
          questions: [].concat(_toConsumableArray(questions), [question])
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeIndex", function (index) {
      _this.index = index;
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragEnd", function () {
      var _this$state = _this.state,
          questions = _this$state.questions,
          dragItemType = _this$state.dragItemType;
      var newQuestions = (0, _lodash.cloneDeep)(questions);
      newQuestions.splice(_this.index, 0, _this.generateQuestionByType(dragItemType));
      (0, _lodash.map)(newQuestions, function (question, questionIndex) {
        if (!(0, _lodash.isUndefined)((0, _lodash.get)(question, 'logic.bind')) && questionIndex > _this.index) {
          if ((0, _lodash.get)(question, 'logic.bind') > _this.index - 1) {
            (0, _lodash.set)(question, 'logic.bind', (0, _lodash.get)(question, 'logic.bind') + 1);
          }
        }
      });

      _this.setState({
        questions: newQuestions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleQuestionClick", function (activeQuestion) {
      var logic = activeQuestion.logic;

      _this.setState({
        activeQuestion: activeQuestion,
        relationSelect: Number((0, _lodash.get)(logic, 'bind')) + 1 || [],
        relationBindOption: (0, _lodash.get)(logic, 'selectOption') || []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderQuestions", function () {
      var questions = _this.state.questions;
      return (0, _lodash.map)(questions, function (question, index) {
        var lastQuestion = (0, _lodash.last)(questions);
        return /*#__PURE__*/_react["default"].createElement(_questionItem["default"], {
          key: index + 1,
          index: index + 1,
          question: question,
          lastQuestion: lastQuestion,
          onChangeIndex: _this.handleChangeIndex,
          onQuestionClick: _this.handleQuestionClick,
          onQuestionItemEdit: function onQuestionItemEdit(index, text) {
            var newQuestions = (0, _lodash.cloneDeep)(questions);
            (0, _lodash.set)(newQuestions, "".concat(index - 1, ".title"), text);

            _this.setState({
              questions: newQuestions
            });
          },
          onQuestionItemOptionEdit: function onQuestionItemOptionEdit(index, optionIndex, text) {
            var newQuestions = (0, _lodash.cloneDeep)(questions);
            (0, _lodash.set)(newQuestions, "".concat(index - 1, ".options.").concat(optionIndex, ".label"), text);

            _this.setState({
              questions: newQuestions
            });
          },
          onQuestionItemDelete: function onQuestionItemDelete(index) {
            var newQuestions = (0, _lodash.cloneDeep)(questions);
            var logicBindIds = [];
            (0, _lodash.map)(questions, function (question) {
              !(0, _lodash.isUndefined)((0, _lodash.get)(question, 'logic.bind')) && logicBindIds.push((0, _lodash.get)(question, 'logic.bind'));
            });

            if ((0, _lodash.indexOf)(logicBindIds, index - 1) > -1) {
              _antd.notification.error({
                message: '删除错误',
                description: '该题有逻辑关联，无法删除'
              });

              return;
            }

            newQuestions.splice(index - 1, 1);
            (0, _lodash.map)(newQuestions, function (question, questionIndex) {
              if (!(0, _lodash.isUndefined)((0, _lodash.get)(question, 'logic.bind')) && questionIndex > index - 1) {
                (0, _lodash.set)(question, 'logic.bind', (0, _lodash.get)(question, 'logic.bind') - 1);
              }
            });

            _this.setState({
              questions: newQuestions
            });
          },
          onQuestionItemOptionsAdd: function onQuestionItemOptionsAdd(index) {
            var newQuestions = (0, _lodash.cloneDeep)(questions);
            var options = (0, _lodash.get)(newQuestions, "".concat(index - 1, ".options")) || [];
            (0, _lodash.set)(newQuestions, 'options', options.push({
              label: '新增选项'
            }));

            _this.setState({
              questions: newQuestions
            });
          },
          onQuestionItemOptionsDelete: function onQuestionItemOptionsDelete(index, optionIndex) {
            var newQuestions = (0, _lodash.cloneDeep)(questions);
            var options = (0, _lodash.get)(newQuestions, "".concat(index - 1, ".options"));
            (0, _lodash.set)(newQuestions, 'options', options.splice(optionIndex, 1));

            _this.setState({
              questions: newQuestions
            });
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderBtns", function () {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-question"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-question-card"
      }, (0, _lodash.map)(btns, function (btn, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "question-step-two__panel-question-card__title"
        }, (0, _lodash.get)(btn, 'title')), /*#__PURE__*/_react["default"].createElement("div", {
          className: "question-step-two__panel-question-card__btns"
        }, (0, _lodash.map)((0, _lodash.get)(btn, 'value'), function (item) {
          return /*#__PURE__*/_react["default"].createElement(_antd.Button, {
            key: (0, _lodash.get)(item, 'value'),
            size: "small",
            type: "ghost",
            className: "question-step-two__panel-question-card__btns-btn",
            draggable: true,
            onDragStart: function onDragStart() {
              _this.setState({
                dragItemType: (0, _lodash.get)(item, 'value')
              });
            },
            onDragEnd: _this.handleDragEnd,
            onClick: _this.handleBtnClick((0, _lodash.get)(item, 'value'))
          }, (0, _lodash.get)(item, 'title'));
        })));
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderLogicEdit", function () {
      var activeQuestion = _this.state.activeQuestion;
      return !(0, _lodash.isUndefined)(activeQuestion) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-func"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-func__title"
      }, "\u9898\u76EE", (0, _lodash.get)(activeQuestion, 'index'), "\u8BBE\u7F6E"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-func__item"
      }, /*#__PURE__*/_react["default"].createElement("span", null, "\u9898\u76EE\u5173\u8054"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        size: "small",
        onClick: function onClick() {
          _this.setState({
            relationVisible: true
          });
        }
      }, "\u8BBE\u7F6E")));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSaveRelation", function () {
      var _this$state2 = _this.state,
          relationBindOption = _this$state2.relationBindOption,
          relationSelect = _this$state2.relationSelect,
          questions = _this$state2.questions,
          activeQuestion = _this$state2.activeQuestion;

      if (relationSelect < 1) {
        _this.setState({
          relationVisible: false
        });

        return;
      }

      var logic = {
        bind: relationSelect - 1,
        selectOption: relationBindOption
      };
      var newQuestions = (0, _lodash.cloneDeep)(questions);
      (0, _lodash.set)(newQuestions, "".concat(Number((0, _lodash.get)(activeQuestion, 'index')) - 1, ".logic"), logic);

      _this.setState({
        questions: newQuestions,
        relationVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderModal", function () {
      var _this$state3 = _this.state,
          relationVisible = _this$state3.relationVisible,
          relationSelect = _this$state3.relationSelect,
          activeQuestion = _this$state3.activeQuestion,
          questions = _this$state3.questions,
          relationBindOption = _this$state3.relationBindOption;
      var questionBefore = questions.slice(0, Number((0, _lodash.get)(activeQuestion, 'index')) - 1);
      var selectOptions = (0, _lodash.filter)(questionBefore, function (question) {
        return (0, _lodash.indexOf)(['radio', 'dropdown', 'multiple'], (0, _lodash.get)(question, 'type')) > -1;
      });
      selectOptions.unshift({
        title: '请选择关联的题目'
      });
      var boxOptions = (0, _lodash.get)(selectOptions, "".concat(relationSelect, ".options"));
      return /*#__PURE__*/_react["default"].createElement(_antd.Modal, {
        title: "\u9898\u76EE\u5173\u8054\u8BBE\u7F6E",
        visible: relationVisible,
        onOk: _this.handleSaveRelation,
        onCancel: function onCancel() {
          _this.setState({
            relationVisible: false
          });
        },
        okText: "\u786E\u8BA4",
        cancelText: "\u53D6\u6D88"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, "\u5F53\u524D\u9898\u76EE\uFF1A"), /*#__PURE__*/_react["default"].createElement("span", null, (0, _lodash.get)(activeQuestion, 'title'))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, "\u5173\u8054\u9898\u76EE\uFF1A"), /*#__PURE__*/_react["default"].createElement(_antd.Select, {
        style: {
          width: 300
        },
        dropdownMatchSelectWidth: 300,
        value: relationSelect,
        onChange: function onChange(value) {
          _this.setState({
            relationSelect: value,
            relationBindOption: []
          });
        }
      }, (0, _lodash.map)(selectOptions, function (option, index) {
        return /*#__PURE__*/_react["default"].createElement(_antd.Select.Option, {
          key: index,
          value: index
        }, index === 0 ? (0, _lodash.get)(option, 'title') : "".concat(index, ".").concat((0, _lodash.get)(option, 'title')));
      }))), relationSelect > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, "\u5F53\u201C\u5173\u8054\u9898\u76EE\u201D\u9009\u62E9\u4E0B\u9762\u7684\u9009\u9879\uFF1A"), /*#__PURE__*/_react["default"].createElement(_antd.Checkbox.Group, {
        value: relationBindOption,
        onChange: function onChange(data) {
          _this.setState({
            relationBindOption: data
          });
        }
      }, (0, _lodash.map)(boxOptions, function (option, index) {
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
          key: index
        }, /*#__PURE__*/_react["default"].createElement(_antd.Checkbox, {
          key: index,
          value: index
        }, (0, _lodash.get)(option, 'label')), /*#__PURE__*/_react["default"].createElement("br", null));
      })), /*#__PURE__*/_react["default"].createElement("div", null, "\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u65F6\uFF0C\u201C\u5F53\u524D\u9898\u76EE\u201D\u624D\u51FA\u73B0")));
    });

    var _data = props.data;
    _this.state = {
      questionsTitle: (0, _lodash.get)(_data, 'questionsTitle') || '',
      questionsDescription: (0, _lodash.get)(_data, 'questionsDescription') || '',
      questions: (0, _lodash.get)(_data, 'questions') || [],
      dragItemType: undefined,
      newQuestionIndex: undefined,
      activeQuestion: undefined,
      relationVisible: false,
      relationSelect: 0,
      relationBindOption: []
    };
    return _this;
  }

  _createClass(Step2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state4 = this.state,
          relationVisible = _this$state4.relationVisible,
          questions = _this$state4.questions,
          questionsTitle = _this$state4.questionsTitle,
          questionsDescription = _this$state4.questionsDescription;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
        className: "question-step-two__panel"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        span: 4
      }, this.renderBtns()), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        span: 12,
        offset: 1,
        className: "question-step-two__panel-preview"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-preview-top"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Input, {
        className: "question-step-two__panel-preview-top__title",
        value: questionsTitle,
        placeholder: "\u8BF7\u8F93\u5165\u6807\u9898",
        onChange: function onChange(e) {
          _this2.setState({
            questionsTitle: (0, _lodash.get)(e, 'target.value')
          });
        }
      }), /*#__PURE__*/_react["default"].createElement(_antd.Input.TextArea, {
        className: "question-step-two__panel-preview-top__desc",
        value: questionsDescription,
        rows: 3,
        placeholder: "\u8BF7\u8F93\u5165\u63CF\u8FF0",
        onChange: function onChange(e) {
          _this2.setState({
            questionsDescription: (0, _lodash.get)(e, 'target.value')
          });
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-preview-middle"
      }, (0, _lodash.isEmpty)(questions) ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-preview-middle__start"
      }, "\u70B9\u51FB\u9898\u578B \u6216\u8005 \u5C06\u9898\u578B\u62D6\u5165\u6B64\u533A\u57DF") : this.renderQuestions()), /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-preview-bottom"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-preview-bottom__title"
      }, /*#__PURE__*/_react["default"].createElement("span", null, "\u5B8C\u6210\u65F6\u663E\u793A")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_antd.Input.TextArea, {
        rows: 5,
        defaultValue: "\u611F\u8C22\u60A8\u7684\u914D\u5408!"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "question-step-two__panel-preview-bottom__btns"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        className: "question-step-two__panel-preview-bottom__btns-btn",
        onClick: function onClick() {
          var onChangeStep = _this2.props.onChangeStep;
          onChangeStep && onChangeStep(0);
        }
      }, "\u4E0A\u4E00\u6B65"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        className: "question-step-two__panel-preview-bottom__btns-btn",
        onClick: function onClick() {
          var onPreview = _this2.props.onPreview;
          var _this2$state = _this2.state,
              questions = _this2$state.questions,
              questionsTitle = _this2$state.questionsTitle,
              questionsDescription = _this2$state.questionsDescription;
          onPreview && onPreview({
            questions: questions,
            questionsTitle: questionsTitle,
            questionsDescription: questionsDescription
          });
        }
      }, "\u9884\u89C8"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        type: "primary",
        className: "question-step-two__panel-preview-bottom__btns-btn",
        onClick: function onClick() {
          var _this2$props = _this2.props,
              onSaveTemplate = _this2$props.onSaveTemplate,
              type = _this2$props.type,
              onCreateTemplate = _this2$props.onCreateTemplate;
          type === 'create' ? onCreateTemplate({
            questions: questions,
            questionsTitle: questionsTitle,
            questionsDescription: questionsDescription
          }) : onSaveTemplate({
            questions: questions,
            questionsTitle: questionsTitle,
            questionsDescription: questionsDescription
          });
        }
      }, "\u4FDD\u5B58\u95EE\u5377")))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
        span: 6,
        offset: 1
      }, !(0, _lodash.isEmpty)(questions) && this.renderLogicEdit())), relationVisible && this.renderModal());
    }
  }]);

  return Step2;
}(_react["default"].Component);

exports["default"] = Step2;