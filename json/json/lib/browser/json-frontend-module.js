"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@theia/core");
var browser_1 = require("@theia/core/lib/browser");
var inversify_1 = require("inversify");
var protocol_1 = require("../common/protocol");
var json_contribution_1 = require("./json-contribution");
var cumstom_widget_contribution_1 = require("./cumstom-widget-contribution");
var widget_test_contribution_1 = require("./widget-test-contribution");
var cumstom_dialog_contribution_1 = require("./cumstom-dialog-contribution");
var custom_dialog_1 = require("./custom-dialog");
var fileservice_contribution_1 = require("./fileservice-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(custom_dialog_1.CumstomDialog).toSelf().inSingletonScope();
    bind(custom_dialog_1.CustomDialogProps).toSelf().inSingletonScope();
    bind(core_1.MenuContribution).to(cumstom_dialog_contribution_1.HelloContribution).inSingletonScope();
    bind(core_1.CommandContribution).to(fileservice_contribution_1.FIleCommandContribution).inSingletonScope();
    bind(core_1.MenuContribution).to(fileservice_contribution_1.FileContribution).inSingletonScope();
    bind(core_1.CommandContribution).to(cumstom_dialog_contribution_1.TestCommandContribution).inSingletonScope();
    widget_test_contribution_1.bindWidget(bind);
    cumstom_widget_contribution_1.bindOpenhandler(bind);
    bind(core_1.CommandContribution).to(json_contribution_1.JsonCommandContribution).inSingletonScope();
    bind(protocol_1.BackendClient).to(BackendClientImpl).inSingletonScope();
    bind(protocol_1.HelloBackendService).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        return connection.createProxy(protocol_1.HELLO_BACKEND_PATH);
    }).inSingletonScope();
    bind(protocol_1.HelloBackendWithClientService).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        var backendClient = ctx.container.get(protocol_1.BackendClient);
        return connection.createProxy(protocol_1.HELLO_BACKEND_WITH_CLIENT_PATH, backendClient);
    }).inSingletonScope();
});
var BackendClientImpl = /** @class */ (function () {
    function BackendClientImpl() {
    }
    BackendClientImpl.prototype.getName = function () {
        return new Promise(function (resolve) { return resolve('Client'); });
    };
    BackendClientImpl = __decorate([
        inversify_1.injectable()
    ], BackendClientImpl);
    return BackendClientImpl;
}());
/**
 *
 *
 *
 *
 *
 *
 *  */ 
//# sourceMappingURL=json-frontend-module.js.map