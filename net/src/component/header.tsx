import React, { SyntheticEvent } from 'react'
import '@static/style/header.css'
import { HashRouter,Route,Switch,RouteComponentProps} from 'react-router-dom'
import WorkspaceComponent from './workspace'
import SettingComponent from './setting'
import { Menu, Dropdown} from 'antd';
export const ArrayList: Array<string> = ['Workspaces','Settings','Docs','Community']
const HeaderComponent: React.FC<React.PropsWithChildren<RouteComponentProps>> = (props: React.PropsWithChildren<RouteComponentProps>) => {
	const history = props.history
	const handleLiClick = (e: SyntheticEvent) => {
		const value = (e.target as any).innerHTML.toLowerCase()
		console.log(value)
		history.push(`/${value}`)
	}
	const menu = (
		<Menu selectable>
		  <Menu.Item key="0">
			<a href="https: //www.antgroup.com">Log out</a>
		  </Menu.Item>
		  <Menu.Item key="1">
			<a href="https: //www.aliyun.com">Settings</a>
		  </Menu.Item>
		  <Menu.Item key="3">Profiles</Menu.Item>
		</Menu>
	  );
	return (
		<div className='container'>
			<div className='header-wrap'>
				<div className='icon-wrap'>
					<a href='https: //www.zhihu.com'>
						<img src='assets/images/DragonMedium.png' alt='' className='lab-img'/>
					</a>
				</div>
				<div className='workspace-wrap'>
					<nav className='navigator'>
						<ul className='li-wrap'>
							<li className='item-wrap li-first'
							onClick = {handleLiClick}
							>Workspaces</li>
							<li className='item-wrap li-second' 
								onClick={handleLiClick}
							>Settings</li>
							<li className='item-wrap li-third'
								onClick={handleLiClick}
							></li>
							<li className='item-wrap li-fourth'
								onClick={handleLiClick}
							>Docs</li>
							<li className='item-wrap li-fifth'
								onClick={handleLiClick}
							>Community</li>
							 {/* 
								here contains duplicates 
								need sone modification
							  */}
						</ul>
					</nav>
					<Dropdown overlay={menu} trigger={['click']} placement='topLeft' >
						<div className='user-account'>
							<div className='user-img-wrap'>
								<img src='assets/images/logo192.png' alt='' className='user-img' />
							</div>
						</div>
					</Dropdown>
				</div>
			</div>
			<div>
				<HashRouter>
					<Switch>
						<Route path='/workspaces' exact component = {WorkspaceComponent} >
						</Route>
						<Route path='/settings' component = {SettingComponent}>
						</Route>
					</Switch>
				</HashRouter>
			</div>
		</div>
	)
}
export default HeaderComponent