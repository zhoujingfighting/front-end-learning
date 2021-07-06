"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindFileNavigatorPreferences = exports.createNavigatorPreferences = exports.FileNavigatorPreferences = exports.FileNavigatorConfigSchema = void 0;
var browser_1 = require("@theia/core/lib/browser");
exports.FileNavigatorConfigSchema = {
    'type': 'object',
    properties: {
        'explorer.autoReveal': {
            type: 'boolean',
            description: 'Selects file under editing in the explorer.',
            default: true
        }
    }
};
exports.FileNavigatorPreferences = Symbol('NavigatorPreferences');
function createNavigatorPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.FileNavigatorConfigSchema);
}
exports.createNavigatorPreferences = createNavigatorPreferences;
function bindFileNavigatorPreferences(bind) {
    bind(exports.FileNavigatorPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createNavigatorPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.FileNavigatorConfigSchema });
}
exports.bindFileNavigatorPreferences = bindFileNavigatorPreferences;
//# sourceMappingURL=navigator-preference.js.map