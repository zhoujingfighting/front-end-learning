import React,{MouseEvent } from 'react'
import { Menu } from 'antd';
export interface IProps {
    onClick(event: MouseEvent<HTMLDivElement>): void,
}
export const onclick = async(e: any) => {
    const value = e.domEvent.target.innerHTML
    /**
     * there will be a ajax request here to post for data
     */
    if( value === 'All'){
        /**
         * for ajax request here from backend ,cause it take some data to render
         * 
         * also need to Encapsulate axios
         */
    }
    return await('onclick')
}
/**
 * @onclick: this should be a function with props
 * 
 */
export const menu:JSX.Element = (
    <Menu onClick= { onclick }  >
        <Menu.Item key="1" > All </Menu.Item>
    </Menu>
	);
export const menuAdd: JSX.Element = (
    <Menu onClick= { onclick } >
        <Menu.Item key="0" > 50 </Menu.Item>
        <Menu.Item key="1" > 100 </Menu.Item>
        < Menu.Item key = "2" > 200 </Menu.Item>
    </Menu>
);