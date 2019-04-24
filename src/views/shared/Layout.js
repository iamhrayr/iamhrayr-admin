import React from "react";
// import { Layout, Menu, Breadcrumb } from "antd";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import Sidebar from "./Sidebar";
import Header from "./Header";

class SiderDemo extends React.Component {
    state = {
        collapsed: false
    };

    render() {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sidebar />
                <Layout>
                    <Header />
                    <Content style={{ margin: "0 16px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                background: "#fff",
                                minHeight: 360
                            }}
                        >
                            Bill is a cat.
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo;
