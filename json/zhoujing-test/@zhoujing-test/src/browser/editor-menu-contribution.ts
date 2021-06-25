import { injectable } from "inversify";
import { MenuContribution,MenuModelRegistry,MAIN_MENU_BAR, CommandContribution, CommandRegistry, Command } from "@theia/core";

// export const EDITOR_CONTEXT_MENU: MenuPath= ['editor_context_menu'];
// export namespace EditorContextMenu {
//     export const NAVIGATION = [...EDITOR_CONTEXT_MENU, 'navigation'];
//     export const MODIFICATION = [...EDITOR_CONTEXT_MENU, '1_modification'];
//     export const CUT_COPY_PASTE = [...EDITOR_CONTEXT_MENU, '9_cutcopypaste'];
//     export const COMMANDS = [...EDITOR_CONTEXT_MENU, 'z_commands'];
//     export const UNDO_REDO = [...EDITOR_CONTEXT_MENU, '1_undo'];
// }
const SampleCommand: Command = {
    id: 'sample-command',
    label: 'Sample Command'
};
const SampleCommand2: Command = {
    id: 'sample-command2',
    label: 'Sample Command2'
};

export namespace EditorMainMenu {
	/**
	 * The main 'exmaple' menu
	 */
	export const EXAMPLE = [...MAIN_MENU_BAR,'example']

	export const NAVIGATION_GROUP = [...EXAMPLE,'submenu']
}
@injectable()
export class EditorMenuContribution implements MenuContribution {
	registerMenus(registry:MenuModelRegistry):void{
		registry.registerSubmenu(EditorMainMenu.EXAMPLE,'Zhoujing',{
			order: '2'
			//这里是决定这个菜单选项的位置选项
		})
		registry.registerMenuAction(EditorMainMenu.EXAMPLE,{
			commandId:SampleCommand.id,
			order:'0'
		})
		registry.registerMenuAction(EditorMainMenu.EXAMPLE,{
			commandId:SampleCommand2.id,
			order:'2'
		})
		/**
		 * @order 是为了确定每个菜单选项的顺序
		 * 
		 */
		// registry.registerMenuAction(EditorMainMenu.EXAMPLE,{
		// 	commandId:common.expample2.id,
		// 	order:'2'
		// })
		// registry.registerMenuAction(EditorMainMenu.EXAMPLE,{
		// 	commandId:common.expample3.id,
		// 	order:'4'
		// })
		//把子菜单注册上去
		registry.registerSubmenu(EditorMainMenu.NAVIGATION_GROUP,'subSubMenu',{order:'2'})
		registry.registerMenuAction(EditorMainMenu.NAVIGATION_GROUP,{
			commandId: SampleCommand.id,
			label:SampleCommand.label,
			order:'4'
		})
		registry.registerMenuAction(EditorMainMenu.NAVIGATION_GROUP,{
			commandId: SampleCommand2.id,
			label: SampleCommand2.label,
			order:'3'
		})
	}
	
}
@injectable()
export class EditorCommandContribution implements CommandContribution{
	
	registerCommands(registry:CommandRegistry):void{
		registry.registerCommand(SampleCommand,{
			execute:() => console.log(1)
		})
		registry.registerCommand(SampleCommand2,{
			execute:() => console.log(2)
		})
	}
	
}