"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = require("react");
var demo_container_1 = require("../../helper/demo-container");
var index_1 = require("../index");
var CustomIcon = index_1.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
react_1.storiesOf('通用', module).add('图标', function () { return (react_2.default.createElement(demo_container_1.DemoPanelContainer, { moreHref: "https://ant.design/components/icon-cn/" },
    react_2.default.createElement("h1", null, "\u9ED8\u8BA4\u56FE\u6807"),
    react_2.default.createElement("p", null, "\u5BFC\u5165\u76F4\u63A5\u4F7F\u7528"),
    react_2.default.createElement(demo_container_1.DemoContainer, { className: "components-button-demo" },
        react_2.default.createElement(index_1.StepBackwardOutlined, null)),
    react_2.default.createElement("h1", null, "\u81EA\u5B9A\u4E49\u56FE\u6807"),
    react_2.default.createElement("p", null, "\u4ECE iconfont.cn \u5F15\u5165"),
    react_2.default.createElement(demo_container_1.DemoContainer, { className: "components-button-demo" },
        react_2.default.createElement("div", null,
            react_2.default.createElement(CustomIcon, { type: "icon-tuichu", style: { marginRight: '1rem' } }),
            react_2.default.createElement(CustomIcon, { type: "icon-facebook", style: { marginRight: '1rem' } }),
            react_2.default.createElement(CustomIcon, { type: "icon-twitter", style: { marginRight: '1rem' } }))))); });
//# sourceMappingURL=index.stories.js.map