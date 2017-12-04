import React from "react";
import { Provider } from "mobx-react";
import { initStore } from "@store/admin";

import Layout from "@comps/Layout/admin";
import ReturnsPage from "@comps/Admin/ReturnsPage";

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
            <Provider store={this.store}>
                <Layout title="订单">
                    <ReturnsPage />
                </Layout>
            </Provider>
        );
    }
}
