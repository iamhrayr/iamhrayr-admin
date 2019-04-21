import React, { Component } from "react";
import { connect } from "react-redux";

import { postActions } from "../../state/ducks/post";

import PostsList from "./PostsList";

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPostList();
    }

    render() {
        const {posts} = this.props;

        return (
            <div>
                <h3>Posts</h3>
                <PostsList posts={posts}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.post.list,
});

export default connect(
    mapStateToProps,
    {
        fetchPostList: postActions.fetchList
    }
)(Posts);
