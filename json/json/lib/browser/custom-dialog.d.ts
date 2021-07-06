import * as React from 'react';
import { ReactDialog } from '@theia/core/lib/browser/dialogs/react-dialog';
import { DialogProps } from '@theia/core/lib/browser';
export declare class CustomDialogProps extends DialogProps {
    readonly text: string;
    readonly okValue: string;
    readonly cancelValue: string;
}
interface CumsDialogValue {
    text: string;
}
export declare class CumstomDialog extends ReactDialog<CustomDialogProps> {
    private readonly props;
    protected text: string;
    constructor(props: CustomDialogProps);
    protected render(): React.ReactNode;
    get value(): CumsDialogValue;
}
export {};
//# sourceMappingURL=custom-dialog.d.ts.map