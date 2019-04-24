import React, { useState, useEffect } from "react";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

export default function Sidebar() {
    const [collabsed, setCollabsed] = useState(false);

    return (
        <Layout.Sider
            collapsible
            collapsed={collabsed}
            onCollapse={setCollabsed}
        >
            {/* <div style={{ paddingVertical: 20, color: "#fff" }}>
                Iamhrayr | admin
            </div> */}
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1">
                    <Icon type="home" />
                    <span>Home</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="thunderbolt" />
                    <span>Skills</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="info-circle" />
                    <span>About</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="mail" />
                    <span>Contact</span>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
}
