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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CumstomDialog = exports.CustomDialogProps = void 0;
var React = require("react");
var inversify_1 = require("inversify");
var react_dialog_1 = require("@theia/core/lib/browser/dialogs/react-dialog");
var browser_1 = require("@theia/core/lib/browser");
//定义入参
var CustomDialogProps = /** @class */ (function (_super) {
    __extends(CustomDialogProps, _super);
    function CustomDialogProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDialogProps = __decorate([
        inversify_1.injectable()
    ], CustomDialogProps);
    return CustomDialogProps;
}(browser_1.DialogProps));
exports.CustomDialogProps = CustomDialogProps;
var CumstomDialog = /** @class */ (function (_super) {
    __extends(CumstomDialog, _super);
    function CumstomDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        var _a = _this.props, text = _a.text, okValue = _a.okValue, cancelValue = _a.cancelValue;
        _this.text = text;
        _this.appendCloseButton(cancelValue);
        _this.appendAcceptButton(okValue);
        return _this;
    }
    CumstomDialog.prototype.render = function () {
        return (React.createElement("div", null, this.text));
    };
    Object.defineProperty(CumstomDialog.prototype, "value", {
        get: function () {
            return {
                text: this.text
            };
        },
        enumerable: false,
        configurable: true
    });
    CumstomDialog = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(CustomDialogProps)),
        __metadata("design:paramtypes", [CustomDialogProps])
    ], CumstomDialog);
    return CumstomDialog;
}(react_dialog_1.ReactDialog));
exports.CumstomDialog = CumstomDialog;
//# sourceMappingURL=custom-dialog.js.map