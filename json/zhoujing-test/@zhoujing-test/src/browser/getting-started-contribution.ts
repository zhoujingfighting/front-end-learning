import { inject,injectable } from "inversify";
import { CommandRegistry, MenuModelRegistry } from "@theia/core";
import { CommonMenus, AbstractViewContribution, FrontendApplicationContribution, bindViewContribution, WidgetFactory } from '@theia/core/lib/browser';
import { GettingStartedWidget } from "./getting-started";
// import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { interfaces } from "@theia/core/shared/inversify";

export const GettingStartedCommand = {
    id: GettingStartedWidget.ID,
    label: GettingStartedWidget.LABEL
}

@injectable()
export class GettingStartedContribution extends AbstractViewContribution<GettingStartedWidget>{
	// @inject(FrontendApplicationContribution)
	// protected readonly stateService: FrontendApplicationContribution

	@inject(WorkspaceService)
	protected readonly workspaceService: WorkspaceService

	constructor(){
		super({
			widgetId: GettingStartedWidget.ID,
			widgetName: GettingStartedWidget.LABEL,
			defaultWidgetOptions:{
				area: "main"
			}
		})
	}
	registerCommands(registry: CommandRegistry):void{
		registry.registerCommand(GettingStartedCommand,{
			execute:() => this.openView({reveal:true})
		})
	}
	registerMenus(menus: MenuModelRegistry):void{
		menus.registerMenuAction(CommonMenus.HELP,{
			commandId:GettingStartedCommand.id,
			label: GettingStartedCommand.label,
			order:'10'
		})
	}
}
export const bindingGettingStarted = (bind: interfaces.Bind) => {
	bindViewContribution(bind,GettingStartedContribution)
	bind(FrontendApplicationContribution).toService(GettingStartedContribution)
	bind(GettingStartedWidget).toSelf()
	bind(WidgetFactory).toDynamicValue(ctx => ({
		id: GettingStartedWidget.ID,
		createWidget: () => {
			return ctx.container.get<GettingStartedWidget>(GettingStartedWidget)
		}
	})).inTransientScope()
}