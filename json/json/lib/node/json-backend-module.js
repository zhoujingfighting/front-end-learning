"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@theia/core");
var inversify_1 = require("inversify");
var protocol_1 = require("../common/protocol");
var hello_backend_with_client_service_1 = require("./hello-backend-with-client-service");
var hello_backend_service_1 = require("./hello-backend-service");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(protocol_1.HelloBackendService).to(hello_backend_service_1.HelloBackendServiceImpl).inSingletonScope();
    bind(core_1.ConnectionHandler).toDynamicValue(function (ctx) {
        console.log(ctx);
        console.log(core_1.ConnectionHandler);
        return new core_1.JsonRpcConnectionHandler(protocol_1.HELLO_BACKEND_PATH, function () {
            return ctx.container.get(protocol_1.HelloBackendService);
        });
    }).inSingletonScope();
    bind(protocol_1.HelloBackendWithClientService).to(hello_backend_with_client_service_1.HelloBackendWithClientServiceImpl).inSingletonScope();
    bind(core_1.ConnectionHandler).toDynamicValue(function (ctx) {
        return new core_1.JsonRpcConnectionHandler(protocol_1.HELLO_BACKEND_WITH_CLIENT_PATH, function (client) {
            var server = ctx.container.get(protocol_1.HelloBackendWithClientService);
            server.setClient(client);
            client.onDidCloseConnection(function () { return server.dispose(); });
            return server;
        });
    }).inSingletonScope();
});
//# sourceMappingURL=json-backend-module.js.map