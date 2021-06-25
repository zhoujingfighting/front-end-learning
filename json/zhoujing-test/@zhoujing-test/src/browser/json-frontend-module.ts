import { CommandContribution, MenuContribution} from '@theia/core';
import {  WebSocketConnectionProvider} from "@theia/core/lib/browser";
import { ContainerModule, injectable } from "inversify";
import { BackendClient, HelloBackendWithClientService, HelloBackendService, HELLO_BACKEND_PATH, HELLO_BACKEND_WITH_CLIENT_PATH } from '../common/protocol';
import { JsonCommandContribution} from './json-contribution';
import { bindWidgetContribution} from './abstract-view-contribution';
import { bindingCustomOpenHandler} from './widgetopen-contribution';
import { EditorCommandContribution, EditorMenuContribution } from './editor-menu-contribution';
import { bindingGettingStarted } from './getting-started-contribution';
import { bindingDialogContribution } from './cumtom-dialog-contribution';
export default new ContainerModule(bind => {
    bindingGettingStarted(bind)
    bindingCustomOpenHandler(bind)
    bindWidgetContribution(bind)

    bindingDialogContribution(bind)
    bind(MenuContribution).toService(EditorMenuContribution)
    bind(EditorMenuContribution).toSelf().inSingletonScope()
    bind(CommandContribution).to(EditorCommandContribution).inSingletonScope()

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