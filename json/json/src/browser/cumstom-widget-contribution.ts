import { injectable, interfaces } from "inversify";
import { WidgetOpenHandler,WidgetOpenerOptions } from "@theia/core/lib/browser";
import { CustonmWidget } from "./cumstom-widget";
import URI from "@theia/core/lib/common/uri";
import { WidgetFactory } from "@theia/core/lib/browser";
import { OpenHandler } from "@theia/core/lib/browser";
export interface CustomWidgetOptions {
    text: string;
}

@injectable()
export class CustomOpenHandler extends WidgetOpenHandler<CustonmWidget>{
	readonly id = CustonmWidget.ID
	canHandle(uri:URI):number{
		console.log(uri.path.ext)
		if(uri.path.ext === '.json'){
			return 500
		}else{
			return 0
		}
	}
	//这里设置传递给widget的参数
	createWidgetOptions(uir:URI,options?:WidgetOpenerOptions):CustomWidgetOptions{
		return {
			text:'这是JSON文件'
		}
	}
}
export const bindOpenhandler = (bind:interfaces.Bind) => {
	console.log(213232)
    bind(OpenHandler).toService(CustomOpenHandler)
	bind(CustomOpenHandler).toSelf().inSingletonScope()
    bind(CustonmWidget).toSelf()
	bind(WidgetFactory).toDynamicValue(ctx => ({
	        id: CustonmWidget.ID,
	        createWidget: (options:CustomWidgetOptions) => {
				console.log(options)
	            const widget = ctx.container.get<CustonmWidget>(CustonmWidget);
	            widget.setText('efefef')
	            return widget
	        }
		})).inSingletonScope();
}
    