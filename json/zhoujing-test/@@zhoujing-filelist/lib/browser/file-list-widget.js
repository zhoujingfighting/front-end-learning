"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileListWidget = void 0;
var React = require("react");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/filesystem/lib/common");
// import {FileServ}
// import URI from '@theia/core/lib/common/uri'
var FileListWidget = /** @class */ (function (_super) {
    __extends(FileListWidget, _super);
    function FileListWidget() {
        var _this = _super.call(this) || this;
        _this.path = [];
        _this.id = FileListWidget_1.ID;
        _this.title.label = 'File List';
        _this.title.caption = 'File List';
        _this.title.iconClass = 'fa fa-title';
        _this.node.tabIndex = 0;
        _this.node.classList.add('theia-file-list');
        return _this;
    }
    FileListWidget_1 = FileListWidget;
    FileListWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.node.focus;
    };
    FileListWidget.prototype.render = function () {
        return;
        (React.createElement(React.Fragment, null,
            React.createElement("div", null, "fefefef")));
    };
    var FileListWidget_1;
    FileListWidget.ID = 'fileList';
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], FileListWidget.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], FileListWidget.prototype, "lableProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], FileListWidget.prototype, "openerService", void 0);
    FileListWidget = FileListWidget_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], FileListWidget);
    return FileListWidget;
}(browser_1.ReactWidget));
exports.FileListWidget = FileListWidget;
//# sourceMappingURL=file-list-widget.js.map