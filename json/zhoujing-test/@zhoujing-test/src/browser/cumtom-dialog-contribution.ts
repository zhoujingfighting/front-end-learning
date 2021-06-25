import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core";
import { injectable, interfaces } from "inversify";
import { CustomDialog, CustomDialogProps } from "./cumstom-dialog";
import { EditorMainMenu } from "./editor-menu-contribution";

export const dialog: Command = {
	id: 'dialog:id',
	label: 'custom-dialog-test'
}
@injectable()
export class DialogCommandContrinution implements CommandContribution {
	registerCommands(command: CommandRegistry){
		command.registerCommand(dialog , {
			execute:async () => {
				const text = await new CustomDialog({
					title: '自定义对话框测试',
					text: '开始测试',
					okValue: '保存',
					cancelValue: '取消'
				}).open()
				console.log('返回文字',text)
			}
		})
	}
}

@injectable()
export class DialogMenuContribution implements MenuContribution {
	registerMenus(menu: MenuModelRegistry){
		menu.registerMenuAction(EditorMainMenu.EXAMPLE,{
			commandId: dialog.id,
			label: dialog.label
		})
	}
}

export const bindingDialogContribution = (bind: interfaces.Bind) => {
	bind(CommandContribution).to(DialogCommandContrinution)
	bind(MenuContribution).to(DialogMenuContribution)
	bind(CustomDialog).toSelf()
	bind(CustomDialogProps).toSelf()
}
