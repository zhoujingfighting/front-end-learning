import { ReactWidget } from "@theia/core/lib/browser";
import { inject,injectable,postConstruct } from "inversify";
import { ApplicationServer } from "@theia/core/lib/common/application-protocol";
import { WorkspaceCommands, WorkspaceService } from '@theia/workspace/lib/browser'
import { EnvVariablesServer } from "@theia/core/lib/common/env-variables";
import * as React from 'react'
@injectable()
export class GettingStartedWidget extends ReactWidget{
	/**
	 * The widget id
	 */
	static readonly ID = `getting.started.widget`

	/**
	 * The widget `label` which is used for display purposes 
	 */
	static readonly LABEL = `Getting started`

	@inject(ApplicationServer)
	protected readonly appServer: ApplicationServer

	@inject(EnvVariablesServer)
	protected readonly environments: EnvVariablesServer

	@inject(WorkspaceService)
	protected readonly workspaceService: WorkspaceService

	@postConstruct()
	protected async init():Promise<void>{
		this.id = GettingStartedWidget.ID
		this.title.label = GettingStartedWidget.LABEL
		this.title.caption = GettingStartedWidget.LABEL
		this.title.closable = true
	}
	protected render():React.ReactNode{
		return (
			<div>
				Getting started Page
			</div>
		)
	}
}