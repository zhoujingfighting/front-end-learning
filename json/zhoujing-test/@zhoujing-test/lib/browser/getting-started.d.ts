import { ReactWidget } from "@theia/core/lib/browser";
import { ApplicationServer } from "@theia/core/lib/common/application-protocol";
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { EnvVariablesServer } from "@theia/core/lib/common/env-variables";
import * as React from 'react';
export declare class GettingStartedWidget extends ReactWidget {
    /**
     * The widget id
     */
    static readonly ID = "getting.started.widget";
    /**
     * The widget `label` which is used for display purposes
     */
    static readonly LABEL = "Getting started";
    protected readonly appServer: ApplicationServer;
    protected readonly environments: EnvVariablesServer;
    protected readonly workspaceService: WorkspaceService;
    protected init(): Promise<void>;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=getting-started.d.ts.map