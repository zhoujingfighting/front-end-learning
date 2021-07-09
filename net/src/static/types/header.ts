import { SyntheticEvent } from "react";
import history from "../apis/history";
export interface liItem {
    key: string
    name: string,
    status: boolean | string | undefined
}
export const ArrayList: Array<liItem> = [
    { key: '1', name: 'Workspaces', status: true },
    { key: '2', name: 'Settings', status: false },
    { key: '3', name: '', status: 'unkonown' },
    { key: '4', name: 'Docs', status: false },
    { key: '5', name: 'Community', status: false }
]
export const handleLiClick = (e: SyntheticEvent, item: liItem) => {
    console.log(e.target)
    const value = item.name.toLowerCase();
    history.push(`/${value}`)
}