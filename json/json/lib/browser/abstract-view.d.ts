import { interfaces } from "inversify";
import { CommandRegistry, MenuModelRegistry } from "@theia/core";
import { SelfWidget } from './self-widget';
import { AbstractViewContribution } from "@theia/core/lib/browser";
export declare class WidgetContribution extends AbstractViewContribution<SelfWidget> {
    constructor();
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): Promise<void>;
}
export declare const bindWidget: (bind: interfaces.Bind) => void;
//# sourceMappingURL=abstract-view.d.ts.map