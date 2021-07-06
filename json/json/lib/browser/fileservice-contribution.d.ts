import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core";
export declare const FileCommand: Command;
export declare class FIleCommandContribution implements CommandContribution {
    private readonly fileDialogService;
    registerCommands(commands: CommandRegistry): void;
}
export declare class FileContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=fileservice-contribution.d.ts.map