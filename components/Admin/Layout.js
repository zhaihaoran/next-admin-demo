import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import StepDump from "@comps/Step/Step";
import Sidebar from "@comps/Admin/Sidebar";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

class Wrapper extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<Layout className="admin-layout">
				<Sidebar />
				<Layout>
					<Header style={{ background: "#fff", padding: 0 }} />
					<Content style={{ margin: "0 16px" }}>
						<Breadcrumb style={{ margin: "16px 0" }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<div id="context">{children}</div>
					</Content>
					<Footer style={{ textAlign: "center" }}>
						Ant Design ©2016 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default Wrapper;
