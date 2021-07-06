import * as React from 'react';
import { ReactWidget, Message, OpenerService, LabelProvider } from '@theia/core/lib/browser';
import { FileStat } from '@theia/filesystem/lib/common/files';
import { FileSystem } from '@theia/filesystem/lib/common';
export declare class FileListWidget extends ReactWidget {
    static ID: string;
    protected readonly filesystem: FileSystem;
    protected readonly lableProvider: LabelProvider;
    protected readonly openerService: OpenerService;
    constructor();
    protected onActivateRequest(msg: Message): void;
    protected path: string[];
    protected current: FileStat | undefined;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=file-list-widget.d.ts.map