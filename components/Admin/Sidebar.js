import { Layout, Menu, Breadcrumb, Icon } from "antd";
import PropTypes from "prop-types";
import Link from "next/link";

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
        path: "/order",
        name: "课程",
        icon: "user"
    },
    {
        path: "/order",
        name: "user",
        icon: "user",
        isSub: true,
        subMenu: [
            {
                path: "/order",
                name: "Bill"
            },
            {
                path: "/user",
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
        // const post = posts.find(post => post.slug === query.slug);

        // if (!post && res) {
        //     res.statusCode = 404;
        // }

        // return { post };
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
                                    <Link href={cell.path}>
                                        <a>{cell.name}</a>
                                    </Link>
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
                                    <Link href={v.path}>
                                        <a>
                                            <Icon type={v.icon} />
                                            <span>{v.name}</span>
                                        </a>
                                    </Link>
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
