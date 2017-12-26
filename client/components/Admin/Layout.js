import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import Sidebar from '@comps/Admin/Sidebar';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

@inject('store')
@observer
class Wrapper extends React.Component {
	render() {
		const { children, store } = this.props;
		console.log(store, 'store');
		const { collapsed, toggle } = store;
		console.log(collapsed, toggle);
		return (
			<Layout className="admin-layout">
				<Sidebar />
				<Layout>
					<Header className="admin-header">
						<Icon
							className="trigger"
							type={collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={toggle}
						/>
					</Header>
					<Content className="admin-content">
						<Breadcrumb className="admin-breadcrumb">
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<div id="context">{children}</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2016 Created by Ant UED
					</Footer>
				</Layout>
				<style>
					{`
					.admin-header {
						background: #fff;
						padding: 0;
					}
					.admin-content {
						margin: 0 16px;
					}
					.admin-breadcrumb {
						margin: 16px 0;
					}
					.trigger {
						font-size: 18px;
						line-height: 64px;
						padding: 0 24px;
						cursor: pointer;
						transition: color .3s;
					}
					.trigger:hover {
						color: #1890ff;
					}
					`}
				</style>
			</Layout>
		);
	}
}

export default Wrapper;
