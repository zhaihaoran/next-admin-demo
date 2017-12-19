import React from "react";
import { string } from "prop-types";
import { Layout } from "antd";

import HeaderWrapper from "@comps/Front/Header";
import FooterWrapper from "@comps/Front/Footer";
import Content from "@comps/Front/Content";

const App = props => (
	<div>
		<Layout className="layout">
			<HeaderWrapper />
			<Content children={props.children} />
			<FooterWrapper />
		</Layout>
	</div>
);

export default App;
