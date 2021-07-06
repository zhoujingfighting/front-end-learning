import { interfaces } from '@theia/core/shared/inversify';
import { PreferenceProxy, PreferenceService, PreferenceSchema } from '@theia/core/lib/browser';
export declare const FileNavigatorConfigSchema: PreferenceSchema;
export interface FileNavigatorConfiguration {
    'explorer.autoReveal': boolean;
}
export declare const FileNavigatorPreferences: unique symbol;
export declare type FileNavigatorPreferences = PreferenceProxy<FileNavigatorConfiguration>;
export declare function createNavigatorPreferences(preferences: PreferenceService): FileNavigatorPreferences;
export declare function bindFileNavigatorPreferences(bind: interfaces.Bind): void;
//# sourceMappingURL=navigator-preference.d.ts.map