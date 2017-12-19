import React from "react";
import { string } from "prop-types";
import { Layout, Menu } from "antd";
import Link from "@comps/Util/ActiveLink";
import logo from "@static/favicon1.png";

const { Header } = Layout;
const { Item } = Menu;

const HeaderList = [
	{
		name: "首页",
		path: "/admin"
	},
	{
		name: "精彩演讲",
		path: "/speech"
	},
	{
		name: "关于涂梦",
		path: "/about"
	}
];

const FrontHeader = ({ title, url }) => {
	return (
		<Header className="tum-header">
			<div className="container">
				<a className="logo" href="/">
					<img src={logo} alt="tumen" />
				</a>
				<div className="main-nav">
					<Menu
						mode="horizontal"
						defaultSelectedKeys={["2"]}
						className="nav-menu"
					>
						{HeaderList.map((v, i) => (
							<Item className="item" key={`list${i}`}>
								<Link href={v.path}>{v.name}</Link>
							</Item>
						))}
					</Menu>
				</div>
			</div>
		</Header>
	);
};

FrontHeader.propTypes = {
	title: string,
	url: string
};

export default FrontHeader;
