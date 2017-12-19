import React from "react";
import { string } from "prop-types";
import { Layout } from "antd";

const { Content } = Layout;

import Carousels from "@comps/Front/Carousel";

const ContentWrapper = props => {
	return <Content className="tum-content">{props.children}</Content>;
};

ContentWrapper.propTypes = {
	title: string
};

export default ContentWrapper;
