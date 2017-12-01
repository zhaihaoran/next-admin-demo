import React from "react";
import { string } from "prop-types";
import { Layout } from "antd";

const { Content } = Layout;

// import style from "@style/scss/content.scss";
import Carousels from "@comps/Front/Carousel";

const ContentWrapper = props => {
    return (
        <div>
            <Content>
                <Carousels />
            </Content>
        </div>
    );
};

ContentWrapper.propTypes = {
    title: string
};

export default ContentWrapper;
