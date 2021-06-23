import { Command, CommandContribution, MenuContribution} from '@theia/core';
import { WebSocketConnectionProvider} from "@theia/core/lib/browser";
import { ContainerModule, injectable } from "inversify";
import { BackendClient, HelloBackendWithClientService, HelloBackendService, HELLO_BACKEND_PATH, HELLO_BACKEND_WITH_CLIENT_PATH } from '../common/protocol';
import { JsonCommandContribution} from './json-contribution';
import { bindOpenhandler } from './cumstom-widget-contribution';
import { bindWidget } from './widget-test-contribution';
import { HelloContribution ,TestCommandContribution} from './cumstom-dialog-contribution';
import { CumstomDialog ,CustomDialogProps} from './custom-dialog';
import { FIleCommandContribution, FileContribution } from './fileservice-contribution';
export default new ContainerModule(bind => {

    bind(CumstomDialog).toSelf().inSingletonScope()
    bind(CustomDialogProps).toSelf().inSingletonScope()
    bind(MenuContribution).to(HelloContribution).inSingletonScope()
    bind(CommandContribution).to(FIleCommandContribution).inSingletonScope()
    bind(MenuContribution).to(FileContribution).inSingletonScope()
    bind(CommandContribution).to(TestCommandContribution).inSingletonScope()
    bindWidget(bind) 
    bindOpenhandler(bind)
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