import { injectable } from "inversify";
import { Command,CommandRegistry,MenuModelRegistry } from "@theia/core";
import { SelfWidget } from './self-widget'
import { AbstractViewContribution,bindViewContribution,CommonMenus, FrontendApplicationContribution, WidgetFactory } from "@theia/core/lib/browser";
import { interfaces } from "@theia/core/shared/inversify";
// import { TabBarToolbarContribution } from "@theia/core/lib/browser/shell/tab-bar-toolbar";
// import { FileNavigatorPreferences } from "./navigator-preference";
// import { ContextKeyService } from "@theia/core/lib/browser/context-key-service";
const TestCommand: Command = {
	id:'test',
	label:'test'
}

@injectable()
export class WidgetContribution extends AbstractViewContribution<SelfWidget> { 
	
	// @inject(FileNavigatorPreferences)
	// protected readonly fileNavigatorPreferences: FileNavigatorPreferences

	// @inject(ContextKeyService)
	// protected readonly contextKeyService: ContextKeyService

	constructor(){
		super({
			widgetId:SelfWidget.ID,
			widgetName:SelfWidget.LABEL,
			defaultWidgetOptions:{area:'left'},
			toggleCommandId:SelfWidget.ID,
			toggleKeybinding:'ctrlcmd+shift+e'
		})
	}
    // @postConstruct()
	// protected async init():Promise<void>{
	// 	await this.fileNavigatorPreferences.ready
	// 	// this.shell.currentChanged.connect(() => this.onCurrentWidgetChangedHandler());
	// 	const updateFocusContextKeys = () => {
	// 		const hasFocus = this.shell.activateWidget instanceof SelfWidget
	// 		this.contextKeyService.explorerViewletFocus.set(hasFocus);
	// 	}
	// }
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
