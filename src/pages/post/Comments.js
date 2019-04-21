import React from "react";

const Comments = ({comments}) => {
    if (comments.length === 0) {
        return <div>No any comment!</div>
    }

    return comments.map(comment => (
        <div key={comment.id}>
            <p>
                {comment.body}
            </p>
        </div>
    ));
}

export default Comments;