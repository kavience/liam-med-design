"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var AntdIcons = _interopRequireWildcard(require("@ant-design/icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var allIcons = AntdIcons;
var Dragger = _antd.Upload.Dragger;

var PicSearcher = /*#__PURE__*/function (_Component) {
  _inherits(PicSearcher, _Component);

  var _super = _createSuper(PicSearcher);

  function PicSearcher() {
    var _this;

    _classCallCheck(this, PicSearcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      modalVisible: false,
      popoverVisible: false,
      icons: [],
      fileList: [],
      error: false,
      modelLoaded: false
    });

    _defineProperty(_assertThisInitialized(_this), "loadModel", function () {
      var script = document.createElement('script');
      script.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return window.antdIconClassifier.load();

              case 2:
                _this.setState({
                  modelLoaded: true
                });

                document.addEventListener('paste', _this.onPaste);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      script.src = 'https://cdn.jsdelivr.net/gh/lewis617/antd-icon-classifier@0.0/dist/main.js';
      document.head.appendChild(script);
    });

    _defineProperty(_assertThisInitialized(_this), "onPaste", function (event) {
      var items = event.clipboardData && event.clipboardData.items;
      var file = null;

      if (items && items.length) {
        for (var i = 0; i < items.length; i += 1) {
          if (items[i].type.indexOf('image') !== -1) {
            file = items[i].getAsFile();
            break;
          }
        }
      }

      if (file) _this.uploadFile(file);
    });

    _defineProperty(_assertThisInitialized(_this), "uploadFile", function (file) {
      _this.setState(function () {
        return {
          loading: true
        };
      });

      var reader = new FileReader();

      reader.onload = function () {
        _this.toImage(reader.result).then(_this.predict);

        _this.setState(function () {
          return {
            fileList: [{
              uid: 1,
              name: file.name,
              status: 'done',
              url: reader.result
            }]
          };
        });
      };

      reader.readAsDataURL(file);
    });

    _defineProperty(_assertThisInitialized(_this), "toImage", function (url) {
      return new Promise(function (resolve) {
        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.src = url;

        img.onload = function onload() {
          resolve(img);
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "predict", function (imgEl) {
      try {
        var icons = window.antdIconClassifier.predict(imgEl);

        if (gtag && icons.length >= 1) {
          gtag('event', 'icon', {
            event_category: 'search-by-image',
            event_label: icons[0].className
          });
        }

        icons = icons.map(function (i) {
          return {
            score: i.score,
            type: i.className.replace(/\s/g, '-')
          };
        });

        _this.setState(function () {
          return {
            icons: icons,
            loading: false,
            error: false
          };
        });
      } catch (err) {
        _this.setState(function () {
          return {
            loading: false,
            error: true
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleModal", function () {
      _this.setState(function (prev) {
        return {
          modalVisible: !prev.modalVisible,
          popoverVisible: false,
          fileList: [],
          icons: []
        };
      });

      if (!localStorage.getItem('disableIconTip')) {
        localStorage.setItem('disableIconTip', 'true');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCopied", function (text) {
      _antd.message.success( /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("code", {
        className: "copied-code"
      }, text), " copied \uD83C\uDF89"));
    });

    return _this;
  }

  _createClass(PicSearcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadModel();
      this.setState({
        popoverVisible: !localStorage.getItem('disableIconTip')
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('paste', this.onPaste);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          modalVisible = _this$state.modalVisible,
          popoverVisible = _this$state.popoverVisible,
          icons = _this$state.icons,
          fileList = _this$state.fileList,
          loading = _this$state.loading,
          modelLoaded = _this$state.modelLoaded,
          error = _this$state.error;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "icon-pic-searcher"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Modal, {
        title: messages["app.docs.components.icon.pic-searcher.title"],
        visible: modalVisible,
        onCancel: this.toggleModal,
        footer: null
      }, modelLoaded || /*#__PURE__*/_react["default"].createElement(_antd.Spin, {
        spinning: !modelLoaded,
        tip: messages['app.docs.components.icon.pic-searcher.modelloading']
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 100
        }
      })), modelLoaded && /*#__PURE__*/_react["default"].createElement(Dragger, {
        accept: "image/jpeg, image/png",
        listType: "picture",
        customRequest: function customRequest(o) {
          return _this2.uploadFile(o.file);
        },
        fileList: fileList,
        showUploadList: {
          showPreviewIcon: false,
          showRemoveIcon: false
        }
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "ant-upload-drag-icon"
      }, /*#__PURE__*/_react["default"].createElement(AntdIcons.InboxOutlined, null)), /*#__PURE__*/_react["default"].createElement("p", {
        className: "ant-upload-text"
      }, messages['app.docs.components.icon.pic-searcher.upload-text']), /*#__PURE__*/_react["default"].createElement("p", {
        className: "ant-upload-hint"
      }, messages['app.docs.components.icon.pic-searcher.upload-hint'])), /*#__PURE__*/_react["default"].createElement(_antd.Spin, {
        spinning: loading,
        tip: messages['app.docs.components.icon.pic-searcher.matching']
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "icon-pic-search-result"
      }, icons.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
        className: "result-tip"
      }, messages['app.docs.components.icon.pic-searcher.result-tip']), /*#__PURE__*/_react["default"].createElement("table", null, icons.length > 0 && /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
        className: "col-icon"
      }, messages['app.docs.components.icon.pic-searcher.th-icon']), /*#__PURE__*/_react["default"].createElement("th", null, messages['app.docs.components.icon.pic-searcher.th-score']))), /*#__PURE__*/_react["default"].createElement("tbody", null, icons.map(function (icon) {
        var type = icon.type;
        var iconName = "".concat(type.split('-').map(function (str) {
          return "".concat(str[0].toUpperCase()).concat(str.slice(1));
        }).join(''), "Outlined");
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: iconName
        }, /*#__PURE__*/_react["default"].createElement("td", {
          className: "col-icon"
        }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
          text: "<".concat(iconName, " />"),
          onCopy: _this2.onCopied
        }, /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
          title: icon.type,
          placement: "right"
        }, /*#__PURE__*/_react["default"].createElement(allIcons[iconName])))), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_antd.Progress, {
          percent: Math.ceil(icon.score * 100)
        })));
      }))), error && /*#__PURE__*/_react["default"].createElement(_antd.Result, {
        status: "500",
        title: "503",
        subTitle: messages['app.docs.components.icon.pic-searcher.server-error']
      })))));
    }
  }]);

  return PicSearcher;
}(_react.Component);

var _default = PicSearcher;
exports["default"] = _default;