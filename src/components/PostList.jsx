import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
    const { postList, fetching } = useContext(PostListData);

    if (fetching) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (postList.length === 0) {
        return (
            <div className="alert alert-info" role="alert" style={{ maxWidth: "30rem", margin: "auto", marginTop: "2rem" }}>
                There are no posts yet. Be the first to create one!
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {postList.map((post) => (
                    <div className="col-12 col-md-6 mb-4" key={post.id}>
                        <Post post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
