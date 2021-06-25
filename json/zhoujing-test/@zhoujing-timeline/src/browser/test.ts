import { Command, CommandContribution, CommandRegistry } from "@theia/core";
import { inject,injectable } from "inversify";
export const TestCommand: Command = {
	id: 'Test:command',
	label:'test command'
}

@injectable()
export class TestContribution implements CommandContribution{
	registerCommands(command: CommandRegistry):void{
		command.registerCommand(TestCommand,{
			execute:() => console.log(1)
		})
	}
}
