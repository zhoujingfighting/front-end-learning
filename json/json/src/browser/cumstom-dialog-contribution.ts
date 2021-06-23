import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core";
import { CommonMenus, ConfirmDialog } from "@theia/core/lib/browser";
import { inject,injectable } from "inversify";
import { MessageService } from "@theia/core";
import { CumstomDialog } from "./custom-dialog";
export const HelloCommand: Command = {
	id:'hello-command',
	label:'hello-command'
}
@injectable()
export class TestCommandContribution implements CommandContribution {
	constructor(@inject(MessageService) private readonly messageService:MessageService) {
		
	}
    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(HelloCommand, {
            execute: async () => {
                 const confirmed = await new CumstomDialog({
					 title:'这是个提示框',
					 text:'确认执行吗？',
					 okValue:'确认',
					 cancelValue:'取消'
				 }).open()
				 console.log('确认了嘛',confirmed)
            }
        });
    }
}
@injectable()
export class HelloContribution implements MenuContribution{
	registerMenus(menus:MenuModelRegistry):void{
		menus.registerMenuAction(CommonMenus.VIEW_VIEWS,{
			commandId : HelloCommand.id,
			label: HelloCommand.label
		})
	}
}