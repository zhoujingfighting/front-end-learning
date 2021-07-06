import * as React from 'react';
import { ReactDialog } from '@theia/core/lib/browser/dialogs/react-dialog';
import { DialogProps } from '@theia/core/lib/browser';
export declare class CustomDialogProps extends DialogProps {
    readonly text: string;
    readonly okValue: string;
    readonly cancelValue: string;
}
interface CustomDialogvalue {
    text: string;
}
export declare class CustomDialog extends ReactDialog<CustomDialogvalue> {
    protected readonly customDialogprops: CustomDialogProps;
    protected readonly text: string;
    constructor(customDialogprops: CustomDialogProps);
    protected render(): React.ReactNode;
    get value(): CustomDialogvalue;
}
export {};
//# sourceMappingURL=cumstom-dialog.d.ts.map