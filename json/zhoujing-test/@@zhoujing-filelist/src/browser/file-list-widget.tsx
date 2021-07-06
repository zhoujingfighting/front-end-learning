import * as React from 'react'
import { inject,injectable } from 'inversify'
import { open, ReactWidget, Message,OpenerService, LabelProvider } from '@theia/core/lib/browser'
import {FileStat} from  '@theia/filesystem/lib/common/files'
import {FileSystem}	from  '@theia/filesystem/lib/common'
// import {FileServ}
// import URI from '@theia/core/lib/common/uri'


@injectable()
export class FileListWidget extends ReactWidget {
	static ID = 'fileList'

	@inject(FileSystem)
	protected readonly filesystem:FileSystem

	@inject(LabelProvider)
	protected readonly lableProvider: LabelProvider

	@inject(OpenerService)
	protected readonly openerService: OpenerService

	constructor(){
		super();
		this.id = FileListWidget.ID
		this.title.label = 'File List'
		this.title.caption = 'File List'
		this.title.iconClass = 'fa fa-title'
		this.node.tabIndex = 0
		this.node.classList.add('theia-file-list')
	}

	protected onActivateRequest(msg: Message): void{
		super.onActivateRequest(msg)
		this.node.focus
	}
	protected path: string[] = []
	protected current: FileStat | undefined

	protected render(): React.ReactNode{
		return 
			(
			<React.Fragment>
				<div>
				fefefef
				</div>
			</React.Fragment>
			) 	
	}

	// protected readonly openParent = (e: React.MouseEvent<HTMLDivElement>) => {
    //     e.stopPropagation();
    //     e.preventDefault();

    //     this.doOpen(this.path.pop()!);
    // }

    // protected readonly openChild = (uri: string) => {
    //     this.path.push(this.current!.uri);
    //     this.doOpen(uri);
    // }

    // get file(): FileStat | undefined {
    //     return this.current;
    // }
    // set file(stat: FileStat | undefined) {
    //     this.path.length = 0;
    //     this.current = undefined;
    //     if (stat) {
    //         // this.doOpen(stat.uri)
    //     } else {
    //         this.update();
    //     }
    // }

    // protected readonly doOpen = async (uri: string): Promise<void> => {
    //     const file = await this.fileSystem.getFileStat(uri);
    //     if (!file) {
    //         return;
    //     }
    //     if (file.isDirectory) {
    //         this.current = file;
    //         this.update();
    //     } else {
    //         open(this.openerService, new URI(file.uri));
    //     }
    // }
}