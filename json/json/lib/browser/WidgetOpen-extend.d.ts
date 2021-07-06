import { interfaces } from "inversify";
import { WidgetOpenHandler, WidgetOpenerOptions } from "@theia/core/lib/browser";
import { CustonmWidget } from "./cumstom-widget";
import URI from "@theia/core/lib/common/uri";
export interface CustomWidgetOptions {
    text: string;
}
export declare class CustomOpenHandler extends WidgetOpenHandler<CustonmWidget> {
    readonly id = "test:widget";
    canHandle(uri: URI): number;
    createWidgetOptions(uir: URI, options?: WidgetOpenerOptions): CustomWidgetOptions;
}
export declare const bindOpenhandler: (bind: interfaces.Bind) => void;
//# sourceMappingURL=widgetOpen-extend.d.ts.map