import '@static/style/workspace.css'
import { Modal, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Input ,Dropdown} from 'antd'
import React, { MouseEvent } from 'react'
import { Menu } from 'antd';
import service from '../static/apis/axios';
import { WorkSpace } from '../static/types/workspace';
import { TestComponent } from './test';
/**
 * @interface:interface should be put into a folder
 * @iflogin: login page can bring some data for next pages' render,so ,it can be a component with state
 */
export const Menuprops:Array<string> = ['Active','All']
export const MenuAddprops: Array<number> = [50,100,200]
const WorkspaceComponent: React.FC<WorkSpace.WorkSpaceProps> = (props:WorkSpace.WorkSpaceProps) => {
	let [data,setData] = React.useState({})
	let [menuData, setMenuData] = React.useState('Active')
	let [menuAddData, setMenuAddData] = React.useState(50)
	const [visible,setVisibile] = React.useState(false)
	const ShowModal: WorkSpace.ShowModal = async () => {
		setVisibile(true)
		/**
		 * ToDO:replace this with real data from backend
		 * 		replace fetch with axios request
		 * 		setData( (await service.get('/demo.json')).data)
		 */
		fetch('../../demo.json').then(res => res.json().then(result => setData(result)))
	};
	const handleOk: WorkSpace.handleOk = () => {
		setVisibile(false)
	}
	const handleCancel: WorkSpace.handleCancel = () => {
		setVisibile(false)
	}
	// interface IProps {
	// 	onClick(event: MouseEvent<HTMLDivElement>): void,
	// }
	const onclick = async (e: any) => {
		const value = e.domEvent.target.innerHTML
		/**
		 * there will be a ajax request here to post for data
		 */
		if (value === 'All') {
			/**
			 * for ajax request here from backend ,cause it take some data to render
			 */
		}
		return await ('onclick')
	}
	/**
	 * @onclick: this should be a function with props
	 * @Menu:how to get menu,menuitem attributes from antd???
	 */
	const menu: JSX.Element = (
		<Menu onClick={onclick}  >
			{
				Menuprops.map((item, index) => {
					return <Menu.Item
						key={index}
						onClick={() => setMenuData(item)}
					>{item}</Menu.Item>
				})
			}
		</Menu>
	);
	const menuAdd: JSX.Element = (
		<Menu onClick={onclick} >
			{
			 MenuAddprops.map( (item,index) => {
					return <Menu.Item 
					key={index}
					onClick = {() => setMenuAddData(item)}
					/**
					 * here will trigger rerender data
					 */
					>{item}</Menu.Item>
				} )
			}
		</Menu>
	);
	console.log(menuAdd.props.children)
	return (
		<div className='workspace-head-wrap'>
			<div className='workspace-title-wrap'>
				<div className='title-wrap'>
					<h1 >Workspaces</h1>
					<h2>Manage recent and stopped workspaces.</h2>
				</div>
				<div className='workspace-bottom-line'>
				</div>
			</div>
			<div className='input-item-wrap'>
				<div className='div-item'>
					<Input placeholder='Search Workspaces' bordered={false} className='input-item-before' />
				</div>
				<div className='empty-div div-item'></div>
				<div className='div-item'>
					<Dropdown overlay={menu}>
						<div>
							Filter: {
								menuData
							} <DownOutlined />
						</div>
							
					</Dropdown>
				</div>
				<div className='div-item'>
					<Dropdown overlay={menuAdd} >
						<div>
							Limit: {menuAddData} <DownOutlined />
						</div>
					</Dropdown>
				</div>
			</div>
			<div className='workspaca-project-wrap'>
				{/* <div>
					No Active Workspaces
				</div>
				<div>
					Prefix any git repository URL with gitpod.io/# or create a new workspace for a recently used project. Learn more
				</div> */}
				<div>
					<Button type="primary" onClick = { ShowModal }>
						New WorkSpace
					</Button>
				</div>
				{/* <div>
					<Button type="primary" onClick={ShowModal}>
						View all Workspaces
					</Button>
				</div> */}
				<div>
					<Modal 
							visible={visible} 
							// ref='modal'   
							title="New WorkSpace" onOk={handleOk} onCancel={handleCancel}
						>
						<TestComponent props = {data} />
					</Modal>
				</div>	
			</div>
		</div>
	)
}
/**
 * todo?conponent 之间的传值
 */
export default WorkspaceComponent

