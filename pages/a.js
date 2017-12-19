import React from "react";
import { initStore } from "@store/admin";
import Layout from "@comps/Head/admin";
import dynamic from "next/dynamic";
import Loading from "@comps/Util/Loading";
import Router from "next/router";

const components = {
	// moduleComp : module
	a: import("@comps/Admin/AccountPage"),
	b: import("@comps/Admin/ReturnsPage")
};

const HelloBundle = dynamic({
	modules: props => {
		// 根据props来决定加载哪个url
		console.log(props.url, "props.url");
		const comp = {};
		comp["Comp"] = components[props.url];
		return comp;
	},
	render: (props, { Comp }) => (
		<div>
			<h1>{props.title}</h1>
			<Comp />
		</div>
	)
});

export default class extends React.Component {
	static async getInitialProps({ query, res, req, pathname }) {
		const isServer = !!req;
		const queryPath = isServer ? req.url : Router.pathname;
		const entry = queryPath.slice(1);
		console.log(entry, "path");

		const store = initStore(isServer);

		return { pathname, isServer, collapsed: store.collapsed, entry };
	}

	constructor(props) {
		super(props);
		const { pathname, collapsed, isServer } = this.props;
		this.store = initStore(isServer, collapsed);
	}

	render() {
		const { entry } = this.props;
		console.log(entry, "entry");
		return (
			<Layout title="b" store={this.store}>
				<HelloBundle url={entry} />
			</Layout>
		);
	}
}
