import React from "react";
import { Router, Route } from "react-router";
import { Layout, Breadcrumb } from "antd";

import Header from "./views/shared/Header";
import Sidebar from "./views/shared/Sidebar";

import history from "./history";

// pages
import Home from "./views/Home";
import Skills from "./views/Skills";
import Works from "./views/Works";
import NewWork from "./views/NewWork";

export default () => {
  // const a: number = 18;

  return (
    <Router history={history}>
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header />
          <Layout.Content
            style={{
              margin: "24px 16px",
              maxHeight: "100%",
              overflow: "auto",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <>
              <Route path="/" exact component={Home} />
              <Route path="/skills" component={Skills} />
              <Route path="/works" exact component={Works} />
              <Route path="/works/new-work" component={NewWork} />
            </>
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
};
