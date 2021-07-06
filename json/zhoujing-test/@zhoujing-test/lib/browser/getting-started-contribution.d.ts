import { CommandRegistry, MenuModelRegistry } from "@theia/core";
import { AbstractViewContribution } from '@theia/core/lib/browser';
import { GettingStartedWidget } from "./getting-started";
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { interfaces } from "@theia/core/shared/inversify";
import { OpenerService } from "@theia/core/lib/browser";
export declare const GettingStartedCommand: {
    id: string;
    label: string;
};
export declare class GettingStartedContribution extends AbstractViewContribution<GettingStartedWidget> {
    protected recentWorkSpace: String[];
    protected readonly workspaceService: WorkspaceService;
    protected readonly openerService: OpenerService;
    constructor();
    protected init(): Promise<void>;
    registerCommands(registry: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
}
export declare const bindingGettingStarted: (bind: interfaces.Bind) => void;
//# sourceMappingURL=getting-started-contribution.d.ts.map