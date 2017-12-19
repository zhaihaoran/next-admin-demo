import React from "react";
import { initStore } from "@store/admin";
import Layout from "@comps/Head/admin";
import dynamic from "next/dynamic";
import Loading from "@comps/Util/Loading";

const DynamicComponent = dynamic(import("@comps/Admin/Table"), {
	loading: Loading,
	ssr: false
});

export default class extends React.Component {
	static async getInitialProps({ query, res, req }) {
		const isServer = !!req;
		console.log(query, "query");
		const entry = isServer ? req.url : "";
		const store = initStore(isServer);
		return { isServer, collapsed: store.collapsed };
	}

	constructor(props) {
		super(props);
		const { collapsed, isServer } = this.props;
		this.store = initStore(isServer, collapsed);
	}

	render() {
		return (
			<Layout title="about" store={this.store}>
				<DynamicComponent />
			</Layout>
		);
	}
}
