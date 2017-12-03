import { Layout, Menu, Breadcrumb, Icon } from "antd";
import PropTypes from "prop-types";
import ActiveLink from "@comps/Util/ActiveLink";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

const sidebarList = [
    {
        path: "/about",
        name: "首页",
        icon: "pie-chart"
    },
    {
        path: "/users",
        name: "活动",
        icon: "team"
    },
    {
        path: "/orders",
        name: "课程",
        icon: "user"
    },
    {
        name: "users",
        icon: "users",
        isSub: true,
        subMenu: [
            {
                path: "/order",
                name: "Bill"
            },
            {
                path: "/users",
                name: "Tom"
            },
            {
                path: "/about",
                name: "Alex"
            }
        ]
    }
];

class Sidebar extends React.Component {
    static async getInitialProps({ query, res }) {
        console.log(query);
    }

    static propTypes = {
        collapsed: PropTypes.bool,
        onCollapse: PropTypes.func
    };

    render() {
        const { collapsed, onCollapse } = this.props;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    {sidebarList.map((v, i) => {
                        if (v.isSub) {
                            const list = v.subMenu.map((cell, i) => (
                                <Item key={"subitem-" + i}>
                                    <ActiveLink href={"/admin" + cell.path}>
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
                                <Item key={"sidebar-" + i}>
                                    <ActiveLink href={"/admin" + v.path}>
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

export default Sidebar;
