import { WidgetOpenHandler, WidgetOpenerOptions } from "@theia/core/lib/browser";
import { CustonmWidget } from "./widgetopen-hander";
import URI from "@theia/core/lib/common/uri";
import { interfaces } from "@theia/core/shared/inversify";
export interface CustomWidgetOptions {
    text: string;
}
export declare class CustomOpenHandler extends WidgetOpenHandler<CustonmWidget> {
    readonly id = "cumstom:widget";
    canHandle(uri: URI): number;
    createWidgetOptions(uir: URI, options?: WidgetOpenerOptions): CustomWidgetOptions;
}
export declare const bindingCustomOpenHandler: (bind: interfaces.Bind) => void;
//# sourceMappingURL=widgetopen-contribution.d.ts.map