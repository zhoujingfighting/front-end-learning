import { MenuContribution, MenuModelRegistry, CommandContribution, CommandRegistry } from "@theia/core";
export declare namespace EditorMainMenu {
    /**
     * The main 'exmaple' menu
     */
    const EXAMPLE: string[];
    const NAVIGATION_GROUP: string[];
}
export declare class EditorMenuContribution implements MenuContribution {
    registerMenus(registry: MenuModelRegistry): void;
}
export declare class EditorCommandContribution implements CommandContribution {
    registerCommands(registry: CommandRegistry): void;
}
//# sourceMappingURL=editor-menu-contribution.d.ts.map