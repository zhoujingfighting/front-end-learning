import * as React from 'react'
import { injectable, postConstruct } from 'inversify'
import { ReactWidget } from '@theia/core/lib/browser'
@injectable()
export class CustonmWidget extends ReactWidget{
	static readonly ID = 'cumstom:widget'
	static readonly LABEL = 'Custom Editor'
	protected text: string	
 
	@postConstruct()
	protected async init():Promise<void>{
		this.id = CustonmWidget.ID
		this.title.label = CustonmWidget.LABEL
		this.title.closable = true
		this.title.iconClass = 'fa fa-window-maximize'//exmaple widget icon
		this.update()//更新视图
	}
	setText(text:string){
		this.text = text
	}
	protected render():React.ReactNode{
		return (
			<React.Fragment>
				<div>自定义编辑器</div>
				<div>{this.text}</div>
			</React.Fragment>
		)
	}
}
