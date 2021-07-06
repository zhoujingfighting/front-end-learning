import { inject,injectable } from "inversify";
import { CommandRegistry, MenuModelRegistry } from "@theia/core";
import { CommonMenus, AbstractViewContribution, FrontendApplicationContribution, bindViewContribution, WidgetFactory ,open} from '@theia/core/lib/browser';
import { GettingStartedWidget } from "./getting-started";
// import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { interfaces, postConstruct } from "@theia/core/shared/inversify";
import { OpenerService } from "@theia/core/lib/browser";
import URI from "@theia/core/lib/common/uri";
import { LabelProviderContribution } from "@theia/core/lib/browser";
export const GettingStartedCommand = {
    id: GettingStartedWidget.ID,
    label: GettingStartedWidget.LABEL
}

@injectable()
export class GettingStartedContribution extends AbstractViewContribution<GettingStartedWidget>{
	// @inject(FrontendApplicationContribution)
	// protected readonly stateService: FrontendApplicationContribution
	protected recentWorkSpace:String[] = []

	@inject(WorkspaceService)
	protected readonly workspaceService: WorkspaceService

	@inject(OpenerService)
	protected readonly openerService: OpenerService

	constructor(){
		super({
			widgetId: GettingStartedWidget.ID,
			widgetName: GettingStartedWidget.LABEL,
			defaultWidgetOptions:{
				area: "main"
			}
		})
		// console.log('this',this)
	}
	@postConstruct()
	protected async init(): Promise<void>{
		let roots  = await this.workspaceService.roots
		console.log(23232,roots[0].resource)
		try{
			// await open(this.openerService,new URI(roots[0].resource))
		}catch{

		}
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