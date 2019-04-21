import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { connect } from "react-redux";
import { Router, Route } from "react-router";

// pages
import Posts from "./pages/posts";
import Post from "./pages/post";

import history from "./history";

export default () => {
    return (
        <Router history={history}>
            <React.Fragment>
                <Route path="/posts" exact component={Posts} />
                <Route path="/posts/:id" component={Post} />
            </React.Fragment>
        </Router>
    );
};
