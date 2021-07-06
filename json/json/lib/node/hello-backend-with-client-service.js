"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloBackendWithClientServiceImpl = void 0;
var inversify_1 = require("inversify");
var HelloBackendWithClientServiceImpl = /** @class */ (function () {
    function HelloBackendWithClientServiceImpl() {
    }
    HelloBackendWithClientServiceImpl.prototype.greet = function () {
        var _this = this;
        debugger;
        console.log('greewdwdt');
        return new Promise(function (resolve, reject) {
            return _this.client ? _this.client.getName().then(function (greet) { return resolve('Hello ' + greet); })
                : reject('No Client');
        });
    };
    HelloBackendWithClientServiceImpl.prototype.dispose = function () {
        // do nothing
    };
    HelloBackendWithClientServiceImpl.prototype.setClient = function (client) {
        this.client = client;
    };
    HelloBackendWithClientServiceImpl = __decorate([
        inversify_1.injectable()
    ], HelloBackendWithClientServiceImpl);
    return HelloBackendWithClientServiceImpl;
}());
exports.HelloBackendWithClientServiceImpl = HelloBackendWithClientServiceImpl;
//# sourceMappingURL=hello-backend-with-client-service.js.map