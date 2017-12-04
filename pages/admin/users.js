import React from "react";
import { initStore } from "@store/admin";
import Layout from "@comps/Layout/admin";
import AccountPage from "@comps/Admin/AccountPage";

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
            <Layout title="详情页" store={this.store}>
                <AccountPage />
            </Layout>
        );
    }
}
