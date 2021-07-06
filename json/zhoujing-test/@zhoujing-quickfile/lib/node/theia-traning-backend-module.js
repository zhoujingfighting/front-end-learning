"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var backend_application_1 = require("@theia/core/lib/node/backend-application");
var theia_traning_backend_contribution_1 = require("./theia-traning-backend-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(theia_traning_backend_contribution_1.TheiaTrainingBackendContribution).toSelf().inSingletonScope();
    bind(backend_application_1.BackendApplicationContribution).toService(theia_traning_backend_contribution_1.TheiaTrainingBackendContribution);
});
//# sourceMappingURL=theia-traning-backend-module.js.map