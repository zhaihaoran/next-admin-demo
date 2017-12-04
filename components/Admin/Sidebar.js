import { Layout, Menu, Breadcrumb, Icon } from "antd";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { withRouter } from "next/router";
import ActiveLink from "@comps/Util/ActiveLink";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

const sidebarList = [
    {
        path: "/admin/about",
        name: "首页",
        icon: "pie-chart"
    },
    {
        path: "/admin/users",
        name: "活动",
        icon: "team"
    },
    {
        path: "/admin/orders",
        name: "课程",
        icon: "user"
    },
    {
        path: "/admin/quiz",
        name: "用户",
        icon: "users",
        isSub: true,
        subMenu: [
            {
                path: "/admin/oraa",
                name: "Bill"
            },
            {
                path: "/admin/bb",
                name: "Tom"
            },
            {
                path: "/admin/cc",
                name: "Alex"
            }
        ]
    }
];

@inject("store")
@observer
class Sidebar extends React.Component {
    static propTypes = {
        //     collapsed: PropTypes.bool,
        //     toggle: PropTypes.func
        // store.collapsed
    };

    handleSidebarLight(path, lists) {
        const array = [];
        for (let i = 0; i < lists.length; i++) {
            const v = lists[i];

            if (!v.isSub && v.path === path) {
                array.push(v.name);
            }

            if (v.isSub) {
                const value = v.subMenu.find(s => s.path === path);
                value && array.push(value.name);
            }
        }
        console.log(array);
        return array;
    }

    render() {
        const { store, router } = this.props;
        const { collapsed, toggle } = store;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={this.handleSidebarLight(
                        router.pathname,
                        sidebarList
                    )}
                    mode="inline"
                >
                    {sidebarList.map((v, i) => {
                        if (v.isSub) {
                            const list = v.subMenu.map((cell, j) => (
                                <Item key={cell.name}>
                                    <ActiveLink href={cell.path}>
                                        {cell.name}
                                    </ActiveLink>
                                </Item>
                            ));

                            return (
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user" />
                                            <span>User</span>
                                        </span>
                                    }
                                >
                                    {list}
                                </SubMenu>
                            );
                        } else {
                            return (
                                <Item key={v.name}>
                                    <ActiveLink href={v.path}>
                                        <Icon type={v.icon} />
                                        <span>{v.name}</span>
                                    </ActiveLink>
                                </Item>
                            );
                        }
                    })}
                </Menu>
            </Sider>
        );
    }
}

export default withRouter(Sidebar);
