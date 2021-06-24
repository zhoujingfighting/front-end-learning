import { inject,injectable } from "inversify";
import { CommandRegistry, MenuModelRegistry } from "@theia/core";
import { CommonMenus, AbstractViewContribution, FrontendApplicationContribution, FrontendApplication } from '@theia/core/lib/browser';
import { GettingStartedWidget } from "./getting-started";
// import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { WorkspaceService } from '@theia/workspace/lib/browser';

export const GettingStartedCommand = {
    id: GettingStartedWidget.ID,
    label: GettingStartedWidget.LABEL
}

@injectable()
export class GettingStartedContribution extends AbstractViewContribution<GettingStartedWidget> implements FrontendApplicationContribution{
	@inject(FrontendApplicationContribution)
	protected readonly stateService: FrontendApplicationContribution

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