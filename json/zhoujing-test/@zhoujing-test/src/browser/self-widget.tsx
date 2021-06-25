import * as React from 'react'
import { injectable,postConstruct } from 'inversify'
import { ReactWidget } from '@theia/core/lib/browser'
//自定义接口

@injectable()
export class SelfWidget extends ReactWidget{
	static readonly ID = 'test:widget'
	static readonly LABEL = 'Self widget'
	static readonly TOGGLR_COMMAND_ID = 'self.widget'

	@postConstruct()
	protected async init():Promise<void>{
		//初始化
		this.id = SelfWidget.ID
		this.title.label = SelfWidget.LABEL
		this.title.caption = SelfWidget.LABEL
		this.title.closable = true
		this.title.iconClass = 'fa fa-window-maximize'
		this.update()//更新	视图
	}
	//
	protected render():React.ReactNode{
		return (
			<div>
				自定义视图
				<h1>
					你好李焕英
				</h1>
			</div>
			
		)
	}
}
//这里是自定义widget