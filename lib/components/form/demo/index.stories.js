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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = require("react");
var demo_container_1 = require("../../helper/demo-container");
var index_1 = require("../index");
var button_1 = require("../../button");
var FormDemo = /** @class */ (function (_super) {
    __extends(FormDemo, _super);
    function FormDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormDemo.prototype.componentDidMount = function () {
        console.log(this.formRef);
    };
    FormDemo.prototype.render = function () {
        var _this = this;
        return (react_2.default.createElement(index_1.default, { ref: function (node) {
                _this.formRef = node;
            } },
            react_2.default.createElement(index_1.default.Item, { key: "action", wrapperCol: { span: 21 } },
                react_2.default.createElement(button_1.default, { ghost: true, type: "primary", htmlType: "reset" }, "\u91CD\u7F6E"),
                react_2.default.createElement(button_1.default, { type: "primary", htmlType: "submit" }, "\u63D0\u4EA4"))));
    };
    return FormDemo;
}(react_2.default.Component));
react_1.storiesOf('表单', module).add('表单', function () { return (react_2.default.createElement(demo_container_1.DemoPanelContainer, { moreHref: "https://ant.design/components/button/" },
    react_2.default.createElement("h1", null, "\u7C7B\u578B\u53CA\u5927\u5C0F"),
    react_2.default.createElement("p", null,
        "\u6309\u94AE\u4E00\u5171\u6709",
        react_2.default.createElement("code", null, "link"),
        " \u3001 ",
        react_2.default.createElement("code", null, "primary"),
        "\u3001",
        react_2.default.createElement("code", null, "default"),
        " \u3001",
        react_2.default.createElement("code", null, "dashed"),
        "\u548C",
        react_2.default.createElement("code", null, "ghost"),
        " \u4E94\u79CD\u7C7B\u578B\u3002 \u5927\u5C0F\u6709 ",
        react_2.default.createElement("code", null, "small"),
        "\u3001",
        react_2.default.createElement("code", null, "middle"),
        "\u3001",
        react_2.default.createElement("code", null, "large"),
        " \u4E09\u79CD\u60C5\u51B5\u3002"),
    react_2.default.createElement(demo_container_1.DemoContainer, { className: "components-button-demo" },
        react_2.default.createElement(FormDemo, null)))); });
//# sourceMappingURL=index.stories.js.map