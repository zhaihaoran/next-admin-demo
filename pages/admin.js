import React from "react";
import { initStore } from "@store/admin";
import Layout from "@comps/Head/admin";
import dynamic from "next/dynamic";
import Loading from "@comps/Util/Loading";

const DynamicComponent = dynamic(
	import("../client/components/Admin/AccountPage"),
	{
		loading: Loading,
		ssr: false
	}
);

export default class extends React.Component {
	static async getInitialProps({ query, res, req, pathname }) {
		const isServer = !!req;
		const store = initStore(isServer);
		return { pathname, isServer, collapsed: store.collapsed };
	}

	constructor(props) {
		super(props);
		const { pathname, collapsed, isServer } = this.props;
		this.store = initStore(isServer, collapsed);
	}

	render() {
		return (
			<Layout title="b" store={this.store}>
				<DynamicComponent />
			</Layout>
		);
	}
}
