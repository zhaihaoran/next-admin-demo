import React from "react";
import { string } from "prop-types";
import { Layout } from "antd";
// import footerScss from "@style/scss/footer.scss";

const { Footer } = Layout;

const FrontFooter = ({ title, url }) => {
    return (
        <Footer>
            <p>haha</p>
        </Footer>
    );
};

FrontFooter.propTypes = {
    title: string,
    url: string
};

export default FrontFooter;
