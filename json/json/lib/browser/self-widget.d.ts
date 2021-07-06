import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser';
export declare class SelfWidget extends ReactWidget {
    static readonly ID = "test:widget";
    static readonly LABEL = "Self widget";
    static readonly TOGGLR_COMMAND_ID = "self.widget";
    protected init(): Promise<void>;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=self-widget.d.ts.map