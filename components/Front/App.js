import React from "react";
import { string } from "prop-types";
import { Layout } from "antd";

import HeaderWrapper from "@comps/Front/Header";
import FooterWrapper from "@comps/Front/Footer";
import ContentWrapper from "@comps/Front/Content";

const App = props => (
    <div>
        <Layout className="layout">
            <HeaderWrapper />
            <ContentWrapper />
            <FooterWrapper />
        </Layout>
    </div>
);

export default App;
