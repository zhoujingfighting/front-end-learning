import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core";
import { MessageService } from "@theia/core";
export declare const HelloCommand: Command;
export declare class TestCommandContribution implements CommandContribution {
    private readonly messageService;
    constructor(messageService: MessageService);
    registerCommands(commands: CommandRegistry): void;
}
export declare class HelloContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=cumstom-dialog-contribution.d.ts.map