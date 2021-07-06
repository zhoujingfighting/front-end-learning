import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { CommandRegistry } from '@theia/core';
export declare class SelfWidget extends ReactWidget {
    static readonly ID = "test:widget";
    static readonly LABEL = "Self widget";
    static readonly TOGGLR_COMMAND_ID = "self.widget";
    protected readonly commandRegistry: CommandRegistry;
    protected readonly workspaceService: WorkspaceService;
    protected init(): Promise<void>;
    protected getWorkSpace(): Promise<string[]>;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=self-widget.d.ts.map