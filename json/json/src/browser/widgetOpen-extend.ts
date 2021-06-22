import { injectable } from "inversify";
import { WidgetOpenHandler,WidgetOpenerOptions } from "@theia/core/lib/browser";
import { CustonmWidget } from "./WidgetOpenHander";
import URI from "@theia/core/lib/common/uri";

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