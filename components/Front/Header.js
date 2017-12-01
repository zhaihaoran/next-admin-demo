import React from "react";
import { string } from "prop-types";
import { Layout, Menu } from "antd";
// import HeaderStyle from "@style/scss/header.scss";

const { Header } = Layout;
const { Item } = Menu;

const FrontHeader = ({ title, url }) => {
    return (
        <Header className="tum-header">
            {/* <style dangerouslySetInnerHTML={{ __html: HeaderStyle }} /> */}
            <div className="container">
                <a className="logo" href="/note">
                    <img src="/static/favicon.ico" alt="tumen" />
                </a>
                <div className="main-nav">
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        className="nav-menu"
                    >
                        <Item className="item" key="1">
                            nav 1
                        </Item>
                        <Item className="item" key="2">
                            nav 2
                        </Item>
                        <Item className="item" key="3">
                            nav 3
                        </Item>
                    </Menu>
                </div>
            </div>
        </Header>
    );
};

FrontHeader.propTypes = {
    title: string,
    url: string
};

export default FrontHeader;
