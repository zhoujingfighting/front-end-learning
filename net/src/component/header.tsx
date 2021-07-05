import React from 'react'
import '@static/style/header.css'
import { HashRouter,Route,Switch,RouteComponentProps} from 'react-router-dom'
import WorkspaceComponent from './workspace'
import SettingComponent from './setting'
import { Menu, Dropdown} from 'antd';
import { ArrayList,handleLiClick} from '../static/types/header'

const HeaderComponent: React.FC<React.PropsWithChildren<RouteComponentProps>> = (props: React.PropsWithChildren<RouteComponentProps>) => {
	const history = props.history
	console.log(history)
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
							{
								ArrayList.map((item,index) => {
									let liItem =  <li
									className='item-wrap'
									key = {index}
									onClick = {(e) => handleLiClick(e,item)}
									>{item.name}</li>
									return liItem
								})
							}
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