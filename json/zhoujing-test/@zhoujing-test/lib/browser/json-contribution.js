"use strict";
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
exports.JsonCommandContribution = void 0;
var inversify_1 = require("inversify");
var protocol_1 = require("../common/protocol");
var SayHelloViaBackendCommandWithCallBack = {
    id: 'sayHelloOnBackendWithCallBack.command',
    label: 'Say hello on the backend with a callback to the client',
};
var SayHelloViaBackendCommand = {
    id: 'sayHelloOnBackend.command',
    label: 'Say hello on the backend',
};
var JsonCommandContribution = /** @class */ (function () {
    function JsonCommandContribution(helloBackendWithClientService, helloBackendService) {
        this.helloBackendWithClientService = helloBackendWithClientService;
        this.helloBackendService = helloBackendService;
    }
    JsonCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(SayHelloViaBackendCommandWithCallBack, {
            execute: function () { return _this.helloBackendWithClientService.greet().then(function (r) { return console.log(r); }); }
        });
        registry.registerCommand(SayHelloViaBackendCommand, {
            execute: function () { return _this.helloBackendService.sayHelloTo('World').then(function (r) { return console.log(r); }); }
        });
    };
    JsonCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(protocol_1.HelloBackendWithClientService)),
        __param(1, inversify_1.inject(protocol_1.HelloBackendService)),
        __metadata("design:paramtypes", [Object, Object])
    ], JsonCommandContribution);
    return JsonCommandContribution;
}());
exports.JsonCommandContribution = JsonCommandContribution;
//# sourceMappingURL=json-contribution.js.map