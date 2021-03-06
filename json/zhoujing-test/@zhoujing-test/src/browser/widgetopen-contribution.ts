import { injectable } from "inversify";
import { WidgetOpenHandler,WidgetOpenerOptions, OpenHandler, WidgetFactory, FrontendApplicationContribution} from "@theia/core/lib/browser";
import { CustonmWidget } from "./widgetopen-hander";
import URI from "@theia/core/lib/common/uri";
import { interfaces } from "@theia/core/shared/inversify";

export interface CustomWidgetOptions {
    text: string;
}

@injectable()
export class CustomOpenHandler extends WidgetOpenHandler<CustonmWidget>{
	readonly id = CustonmWidget.ID

	canHandle(uri:URI):number{
		console.log(this.id)
		console.log(uri)
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

export const bindingCustomOpenHandler = (bind: interfaces.Bind) => {
	bind(OpenHandler).toService(CustomOpenHandler)
    bind(CustomOpenHandler).toSelf().inSingletonScope()
    bind(CustonmWidget).toSelf()

	bind(WidgetFactory).toDynamicValue(ctx => ({
        id: CustonmWidget.ID,
        createWidget: () => {
            const widget = ctx.container.get<CustonmWidget>(CustonmWidget);
            // widget.setText(options.text);
            return widget
        }
    })).inSingletonScope();
}