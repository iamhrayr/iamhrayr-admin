import React from "react";
import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
    if (!posts.fetched) {
        return <div>Loading...</div>
    }

    return posts.allIds.map(id => (
        <div key={id}>
            <Link to={`posts/${id}`}>
                <h3>{posts.idMap[id].title}</h3>
            </Link>
            <p>{posts.idMap[id].body}</p>
        </div>
    ));
}

export default PostsList;