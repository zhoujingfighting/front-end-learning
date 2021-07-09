import { MaybePromise } from "@theia/core"
import { ApplicationShell, BaseWidget, OpenerOptions, WidgetManager, WidgetOpenHandler } from '@theia/core/lib/browser';
import { URI } from '@theia/plugin-ext/lib/plugin/types-impl';
import { WidgetOpenerOptions } from "@theia/core/lib/browser";
import {inject, injectable} from 'inversify';

/**
 * OpenHandlerTest should be implemented to provide a new opener
 */
 export const OpenHandlerTest = Symbol('OpenHandlerTest')
export interface OpenHandlerTest{
	/**
	 * A human-readble name of this handler
	 */
	label?: string
	iconClass?: string
	open(factoryId: string, options?: OpenerOptions): MaybePromise<object | undefined>
}
@injectable()
export class WidgetDuplicateHandler extends WidgetOpenHandler<BaseWidget> implements OpenHandlerTest{
	@inject(ApplicationShell) private readonly shell: ApplicationShell ;

	@inject(WidgetManager) private readonly widgetManager: WidgetManager

	async open(factoryId: URI,options: WidgetOpenerOptions): Promise<BaseWidget>{
		const widget = await this.getOrCreateWidget(factoryId,options);
		await this.doOpen(widget,options);
		return widget
	}
	private async doOpen(widget: BaseWidget, options: WidgetOpenerOptions): Promise<void>{
		const op: WidgetOpenerOptions = {
			mode: 'activate',
			...options
		};
		if(!widget.isAttached){
			this.shell.addWidget(widget,op.widgetOptions || { area: 'main' })
		}
		if(op.mode === 'activate'){
			await this.shell.activateWidget(widget.id)
		}else if(op.mode === 'reveal'){
			await this.shell.revealWidget(widget.id)
		}
	}
}