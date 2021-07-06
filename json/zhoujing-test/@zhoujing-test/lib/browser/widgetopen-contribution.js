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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindingCustomOpenHandler = exports.CustomOpenHandler = void 0;
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var widgetopen_hander_1 = require("./widgetopen-hander");
var CustomOpenHandler = /** @class */ (function (_super) {
    __extends(CustomOpenHandler, _super);
    function CustomOpenHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = widgetopen_hander_1.CustonmWidget.ID;
        return _this;
    }
    CustomOpenHandler.prototype.canHandle = function (uri) {
        console.log(this.id);
        console.log(uri);
        if (uri.path.ext === '.json') {
            return 500;
        }
        else {
            return 0;
        }
    };
    //这里设置传递给widget的参数
    CustomOpenHandler.prototype.createWidgetOptions = function (uir, options) {
        return {
            text: '这是JSON文件'
        };
    };
    CustomOpenHandler = __decorate([
        inversify_1.injectable()
    ], CustomOpenHandler);
    return CustomOpenHandler;
}(browser_1.WidgetOpenHandler));
exports.CustomOpenHandler = CustomOpenHandler;
var bindingCustomOpenHandler = function (bind) {
    bind(browser_1.OpenHandler).toService(CustomOpenHandler);
    bind(CustomOpenHandler).toSelf().inSingletonScope();
    bind(widgetopen_hander_1.CustonmWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: widgetopen_hander_1.CustonmWidget.ID,
        createWidget: function () {
            var widget = ctx.container.get(widgetopen_hander_1.CustonmWidget);
            // widget.setText(options.text);
            return widget;
        }
    }); }).inSingletonScope();
};
exports.bindingCustomOpenHandler = bindingCustomOpenHandler;
//# sourceMappingURL=widgetopen-contribution.js.map