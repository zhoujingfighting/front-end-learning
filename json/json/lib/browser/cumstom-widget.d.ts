import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser';
export declare class CustonmWidget extends ReactWidget {
    static readonly ID = "test:widget";
    static readonly LABEL = "Custom Editor";
    protected text: string;
    protected init(): Promise<void>;
    setText(text: string): void;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=cumstom-widget.d.ts.map