import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card mb-4" style={{ width: "30rem", margin: "auto" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title">{post.title}</h5>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </button>
        </div>
        <p className="card-text">{post.body}</p>
        <div className="mb-3">
          {post.tags.map((tag) => (
            <span key={tag} className="badge bg-secondary me-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="alert alert-info" role="alert">
          This post has {post.reactions.likes} likes and {post.reactions.dislikes} dislikes.
        </div>
      </div>
    </div>
  );
};

export default Post;