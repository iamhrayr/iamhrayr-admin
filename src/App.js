import React from "react";
import { Router, Route } from "react-router";
import { Layout, Breadcrumb } from "antd";

import Header from "./views/shared/Header";
import Sidebar from "./views/shared/Sidebar";

import history from "./history";

// pages
import Home from "./views/Home";
import Skills from "./views/Skills";
import WorkList from "./views/Work/List";
import NewWork from "./views/Work/New";
import EditWork from "./views/Work/Edit";

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
              <Route path="/works" exact component={WorkList} />
              <Route path="/works/:id" component={EditWork} />
              <Route path="/works/new-work" component={NewWork} />
            </>
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
};
