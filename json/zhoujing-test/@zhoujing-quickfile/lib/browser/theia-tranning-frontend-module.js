"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var theia_training_frontend_contribution_1 = require("./theia-training-frontend-contribution");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(theia_training_frontend_contribution_1.TheiaTrainingFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(theia_training_frontend_contribution_1.TheiaTrainingFrontendContribution);
    bind(common_1.MenuContribution).toService(theia_training_frontend_contribution_1.TheiaTrainingFrontendContribution);
    bind(browser_1.KeybindingContribution).toService(theia_training_frontend_contribution_1.TheiaTrainingFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(theia_training_frontend_contribution_1.TheiaTrainingFrontendContribution);
});
//# sourceMappingURL=theia-tranning-frontend-module.js.map