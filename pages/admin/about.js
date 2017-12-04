import React from "react";
import { initStore } from "@store/admin";
import Layout from "@comps/Layout/admin";
import OrdersPage from "@comps/Admin/OrdersPage";

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
            <Layout title="关于" store={this.store}>
                <OrdersPage />
            </Layout>
        );
    }
}
