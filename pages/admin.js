import React from "react";
import { initStore } from "@store/admin";
import Layout from "@comps/Layout/admin";
import ReturnsPage from "@comps/Admin/ReturnsPage";
import routes from "@route/admin";

export default class extends React.Component {
	static async getInitialProps({ query, res, req, pathname }) {
		const isServer = !!req;
		console.log(isServer, "服务器渲染");
		const queryPath = query ? query.slug : "";
		console.log(queryPath);
		const store = initStore(isServer);
		const route = routes.find(v => v.slug === queryPath);

		return { pathname, isServer, collapsed: store.collapsed, route };
	}

	constructor(props) {
		super(props);
		const { pathname, collapsed, isServer } = this.props;
		this.store = initStore(isServer, collapsed);
	}

	render() {
		const { route } = this.props;
		return (
			<Layout title={route.title} store={this.store}>
				{route.context}
			</Layout>
		);
	}
}
