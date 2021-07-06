import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core";
import { interfaces } from "inversify";
export declare const dialog: Command;
export declare class DialogCommandContrinution implements CommandContribution, MenuContribution {
    registerCommands(command: CommandRegistry): void;
    registerMenus(menu: MenuModelRegistry): void;
}
export declare const bindingDialogContribution: (bind: interfaces.Bind) => void;
//# sourceMappingURL=cumtom-dialog-contribution.d.ts.map