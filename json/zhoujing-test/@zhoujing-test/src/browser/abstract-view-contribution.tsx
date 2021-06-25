import { injectable } from "inversify";
import { Command,CommandRegistry,MenuModelRegistry } from "@theia/core";
import { SelfWidget } from './self-widget'
import { AbstractViewContribution,bindViewContribution,CommonMenus, FrontendApplicationContribution, WidgetFactory } from "@theia/core/lib/browser";
import { interfaces } from "@theia/core/shared/inversify";
const TestCommand: Command = {
	id:'test',
	label:'test'
}

@injectable()
export class WidgetContribution extends AbstractViewContribution<SelfWidget>{
	//基础的
	constructor(){
		super({
			widgetId:SelfWidget.ID,
			widgetName:SelfWidget.LABEL,
			defaultWidgetOptions:{area:'main'},
			toggleCommandId:SelfWidget.ID
		})
	}
	//通过改写registerCommands方法，绑定其他命令
	registerCommands(commands:CommandRegistry){
		super.registerCommands(commands)
		commands.registerCommand(TestCommand ,{
			execute:() => console.log(1)
		})
	}
	//通过改写registerMenus方法，绑定其他菜单项
	async registerMenus(menus:MenuModelRegistry){
		super.registerMenus(menus)
		menus.registerMenuAction(CommonMenus.VIEW,{
			commandId:TestCommand.id,
			label:TestCommand.label
		})
	}
	// @postConstruct()
	// //可以立即执行
	// getProjectPath():URI | undefined{
	// 	console.log(23123)
	// 	return this.workspaceService.workspace?.resource 
	// }
}


export const bindWidgetContribution = (bind: interfaces.Bind) => {
	bindViewContribution(bind,WidgetContribution)
	bind(FrontendApplicationContribution).toService(WidgetContribution)
	bind(SelfWidget).toSelf()
	bind(WidgetFactory).toDynamicValue(ctx => ({
		id: SelfWidget.ID,
		createWidget:() => {
			return ctx.container.get<SelfWidget>(SelfWidget)
		}
	})).inSingletonScope()
}
