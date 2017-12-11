import { Layout, Menu, Breadcrumb, Icon } from "antd";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { withRouter } from "next/router";
import { Link, Router } from "@route/router";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

const sidebarList = [
	{
		path: "about",
		name: "首页",
		icon: "pie-chart"
	},
	{
		path: "users",
		name: "活动",
		icon: "team"
	},
	{
		path: "orders",
		name: "课程",
		icon: "user"
	},
	{
		path: "quiz",
		name: "用户",
		icon: "users",
		isSub: true,
		subMenu: [
			{
				path: "oraa",
				name: "Bill"
			},
			{
				path: "bb",
				name: "Tom"
			},
			{
				path: "cc",
				name: "Alex"
			}
		]
	}
];

@inject("store")
@observer
class Sidebar extends React.Component {
	static propTypes = {
		//     collapsed: PropTypes.bool,
		//     toggle: PropTypes.func
		// store.collapsed
	};

	handleSidebarLight(path, lists) {
		const array = [];
		for (let i = 0; i < lists.length; i++) {
			const v = lists[i];

			if (!v.isSub && v.path === path) {
				array.push(v.name);
			}

			if (v.isSub) {
				const value = v.subMenu.find(s => s.path === path);
				value && array.push(value.name);
			}
		}
		console.log(array);
		return array;
	}

	render() {
		const { store, router } = this.props;
		const { collapsed, toggle } = store;
		return (
			<Sider collapsible collapsed={collapsed} onCollapse={toggle}>
				<div className="logo" />
				<Menu
					theme="dark"
					defaultSelectedKeys={this.handleSidebarLight(
						router.pathname,
						sidebarList
					)}
					mode="inline"
				>
					{sidebarList.map((v, i) => {
						if (v.isSub) {
							const list = v.subMenu.map((cell, j) => (
								<Item key={cell.name}>
									<Link
										route="admin"
										params={{ slug: cell.path }}
									>
										<a>{cell.name}</a>
									</Link>
								</Item>
							));

							return (
								<SubMenu
									key="sub1"
									title={
										<span>
											<Icon type="user" />
											<span>User</span>
										</span>
									}
								>
									{list}
								</SubMenu>
							);
						} else {
							return (
								<Item key={v.name}>
									<Link
										route="admin"
										params={{ slug: v.path }}
									>
										<a>
											<Icon type={v.icon} />
											<span>{v.name}</span>
										</a>
									</Link>
								</Item>
							);
						}
					})}
				</Menu>
			</Sider>
		);
	}
}

export default withRouter(Sidebar);
