import { CommandContribution} from '@theia/core';
import { bindViewContribution, FrontendApplicationContribution, OpenHandler, WebSocketConnectionProvider, WidgetFactory } from "@theia/core/lib/browser";
import { ContainerModule, injectable } from "inversify";
import { BackendClient, HelloBackendWithClientService, HelloBackendService, HELLO_BACKEND_PATH, HELLO_BACKEND_WITH_CLIENT_PATH } from '../common/protocol';
import { JsonCommandContribution} from './json-contribution';
import { SelfWidget } from './self-widget';
import { WidgetContribution } from './abstract-view';
import { CustomOpenHandler } from './widgetOpen-extend';
import { CustonmWidget } from './WidgetOpenHander';
import { CustomWidgetOptions } from './widgetOpen-extend';
export default new ContainerModule(bind => {
    bindViewContribution(bind,WidgetContribution)
    bind(FrontendApplicationContribution).toService(WidgetContribution)
    bind(SelfWidget).toSelf()
    bind(OpenHandler).toService(CustomOpenHandler)
    bind(CustomOpenHandler).toSelf().inSingletonScope()
    bind(CustonmWidget).toSelf()
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: SelfWidget.ID,
        createWidget: () => {
            const widget = ctx.container.get<SelfWidget>(SelfWidget);
            // widget.setText(options.text);
            return widget
        }
    })).inSingletonScope();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: SelfWidget.ID,
        createWidget: () => {
            const widget = ctx.container.get<SelfWidget>(SelfWidget);
            // widget.setText(options.text);
            return widget
        }
    })).inSingletonScope();

    bind(CommandContribution).to(JsonCommandContribution).inSingletonScope();
    bind(BackendClient).to(BackendClientImpl).inSingletonScope();

    bind(HelloBackendService).toDynamicValue(ctx => {
        const connection = ctx.container.get(WebSocketConnectionProvider);
        return connection.createProxy<HelloBackendService>(HELLO_BACKEND_PATH);
    }).inSingletonScope();

    bind(HelloBackendWithClientService).toDynamicValue(ctx => {
        const connection = ctx.container.get(WebSocketConnectionProvider);
        const backendClient: BackendClient = ctx.container.get(BackendClient);
        return connection.createProxy<HelloBackendWithClientService>(HELLO_BACKEND_WITH_CLIENT_PATH, backendClient);
    }).inSingletonScope();
});

@injectable()
class BackendClientImpl implements BackendClient {
    getName(): Promise<string> {
        return new Promise(resolve => resolve('Client'));
    }
}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 *  */                     