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
exports.DemoPanelContainer = exports.DemoContainer = void 0;
var react_1 = require("react");
require("./index.less");
var DemoContainer = /** @class */ (function (_super) {
    __extends(DemoContainer, _super);
    function DemoContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoContainer.prototype.render = function () {
        return react_1.default.createElement("div", { className: "demo-container" }, this.props.children);
    };
    return DemoContainer;
}(react_1.default.Component));
exports.DemoContainer = DemoContainer;
var DemoPanelContainer = /** @class */ (function (_super) {
    __extends(DemoPanelContainer, _super);
    function DemoPanelContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoPanelContainer.prototype.render = function () {
        var moreHref = this.props.moreHref;
        return (react_1.default.createElement("div", { className: "demo-panel-container" },
            this.props.children,
            react_1.default.createElement("a", { className: "demo-panel-container-more", href: moreHref }, "\u67E5\u770B\u66F4\u591A")));
    };
    return DemoPanelContainer;
}(react_1.default.Component));
exports.DemoPanelContainer = DemoPanelContainer;
//# sourceMappingURL=index.js.map