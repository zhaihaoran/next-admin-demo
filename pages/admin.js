import React from "react";
import Layout from "@comps/Layout/admin";
import ReturnsPage from "@comps/Admin/ReturnsPage";

export default class extends React.Component {
    static async getInitialProps({ query, res, pathname }) {
        return { pathname };
    }

    render() {
        const { pathname } = this.props;

        return (
            <Layout title="首页">
                <ReturnsPage />
            </Layout>
        );
    }
}
