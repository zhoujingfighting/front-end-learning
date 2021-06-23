import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core";
import { CommonMenus, ConfirmDialog } from "@theia/core/lib/browser";
import { inject,injectable } from "inversify";
import { FileDialogService } from '@theia/filesystem/lib/browser';

export const FileCommand: Command = {
	id:'file-command',
	label:'file-command'
}
@injectable()
export class FIleCommandContribution implements CommandContribution {
	@inject(FileDialogService) private readonly fileDialogService : FileDialogService
    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(FileCommand, {
            execute: async () => {
				const uri = await this.fileDialogService.showSaveDialog({
					title : '选择保存目录',
					saveLabel : '保存'
				})
				console.log(uri)
			}
        });
    }
}
@injectable()
export class FileContribution implements MenuContribution{
	registerMenus(menus:MenuModelRegistry):void{
		menus.registerMenuAction(CommonMenus.VIEW_VIEWS,{
			commandId : FileCommand.id,
			label: FileCommand.label
		})
	}
	//	这是注册在菜单栏上
}