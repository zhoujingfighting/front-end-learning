import { CommandContribution, CommandRegistry } from '@theia/core/lib/common';
import { HelloBackendWithClientService, HelloBackendService } from '../common/protocol';
export declare class JsonCommandContribution implements CommandContribution {
    private readonly helloBackendWithClientService;
    private readonly helloBackendService;
    constructor(helloBackendWithClientService: HelloBackendWithClientService, helloBackendService: HelloBackendService);
    registerCommands(registry: CommandRegistry): void;
}
//# sourceMappingURL=json-contribution.d.ts.map