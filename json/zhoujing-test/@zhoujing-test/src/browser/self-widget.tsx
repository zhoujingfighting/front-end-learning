import * as React from 'react'
import { injectable,postConstruct ,inject} from 'inversify'
import { ReactWidget } from '@theia/core/lib/browser'
import { WorkspaceService } from '@theia/workspace/lib/browser'
import { CommandRegistry } from '@theia/core'
import URI from '@theia/core/lib/common/uri'
//自定义接口
import { WorkspaceCommands } from '@theia/workspace/lib/browser'
@injectable()
export class SelfWidget extends ReactWidget{
	static readonly ID = 'test:widget'
	static readonly LABEL = 'Self widget'
	static readonly TOGGLR_COMMAND_ID = 'self.widget'
	@inject(CommandRegistry) protected readonly commandRegistry: CommandRegistry

	@inject(WorkspaceService)
	protected readonly workspaceService: WorkspaceService

	@postConstruct()
	protected async init():Promise<void>{
		//初始化
		this.id = SelfWidget.ID
		this.title.label = SelfWidget.LABEL
		this.title.caption = SelfWidget.LABEL
		this.title.closable = true
		this.title.iconClass = 'fa fa-window-maximize'
		console.log('self',this)
		this.update()//更新	视图
	}
	//
	protected async getWorkSpace(){
	    return  this.workspaceService.recentWorkspaces()
	}
	protected render():React.ReactNode{
		return (
			<div>
				自定义视图
				<h1>
					你好李焕英
				</h1>
				<button onClick = { () => {
					// this.commandRegistry.executeCommand(WorkspaceCommands.OPEN.id)
						this.getWorkSpace().then(res => console.log('eded',res))
					} }>
						点击此处跳转
				</button>
				
				<button>
					
				</button>

			</div>
			
		)
	}
}
//这里是自定义widget