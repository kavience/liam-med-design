"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = require("react");
var demo_container_1 = require("../../helper/demo-container");
var index_1 = require("../index");
react_1.storiesOf('通用', module).add('按钮', function () { return (react_2.default.createElement(demo_container_1.DemoPanelContainer, { moreHref: "https://ant.design/components/button/" },
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
        react_2.default.createElement(index_1.default, { type: "link" }, "link"),
        react_2.default.createElement(index_1.default, null, "Default"),
        react_2.default.createElement(index_1.default, { type: "primary" }, "Primary"),
        react_2.default.createElement(index_1.default, { type: "dashed" }, "Dashed"),
        react_2.default.createElement(index_1.default, { type: "ghost" }, "ghost")))); });
//# sourceMappingURL=index.stories.js.map