export namespace WorkSpace{
    export interface WorkSpaceProps {
        [key: string]: any
    }
    export interface ShowModal {
        (): void
    }   
    export interface handleOk {
        (): void,
    }
    export interface handleCancel {
        (): void,
    }
}
