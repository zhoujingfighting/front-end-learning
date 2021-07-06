import { CommandRegistry, MenuModelRegistry } from "@theia/core";
import { SelfWidget } from './self-widget';
import { AbstractViewContribution } from "@theia/core/lib/browser";
import { interfaces } from "@theia/core/shared/inversify";
export declare class WidgetContribution extends AbstractViewContribution<SelfWidget> {
    constructor();
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): Promise<void>;
}
export declare const bindWidgetContribution: (bind: interfaces.Bind) => void;
//# sourceMappingURL=abstract-view-contribution.d.ts.map