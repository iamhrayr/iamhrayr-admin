import React, { Component } from "react";
import { connect } from "react-redux";

import { postActions } from "../../state/ducks/post";

import Comments from "./Comments";
import WriteComment from "./WriteComment";

class Post extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        const { postDetails } = this.props;

        if (!postDetails.fetched) {
            return <div>loading...</div>
        }

        return (
            <div>
                <h3>{postDetails.data.title}</h3>
                <p>{postDetails.data.body}</p>
                <Comments comments={postDetails.data.comments}/>
                <WriteComment writeComment={this._handleWriteComment} />
            </div>
        );
    }

    _handleWriteComment = (body) => {
        this.props.writeComment({ body, postId: this.props.match.params.id });
    }
}

const mapStateToProps = state => ({
    postDetails: state.post.details
});

export default connect(
    mapStateToProps,
    {
        fetchPost: postActions.fetchDetails,
        writeComment: postActions.writeComment,
    }
)(Post);
